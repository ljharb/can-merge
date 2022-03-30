/* eslint-disable no-underscore-dangle */

'use strict';

const pullRequestStatus = require('./models/pullRequestStatus');

const getConclusionString = ({ commits: { nodes } }) => nodes
	.map((node) => node.commit.statusCheckRollup?.state)
	.toString();

const doesPRHaveConflicts = (pullRequest) => pullRequest.mergeable === 'MERGEABLE';

module.exports = function evaluatePullRequest(response) {
	if (!response) {
		return false;
	}
	const {
		merged,
		state,
		reviewDecision,
		viewerCanMergeAsAdmin,
	} = response;

	if (state !== 'OPEN') {
		if (merged) {
			return pullRequestStatus.MERGED;
		}
		return pullRequestStatus.CLOSED;
	}

	if (!doesPRHaveConflicts(response)) {
		return pullRequestStatus.CONFLICT;
	}

	const conclusion = getConclusionString(response);
	if (conclusion !== 'SUCCESS' && conclusion !== 'FAILURE') {
		if (conclusion === 'PENDING') {
			return pullRequestStatus.STATUS_PENDING;
		}
	} else if (conclusion) {
		const { commits: { nodes: [{ commit: { statusCheckRollup } }] } } = response;

		for (const ctx of statusCheckRollup.contexts.nodes) {
			if (ctx.__typename === 'StatusContext' && ctx.state === 'FAILURE') {
				return pullRequestStatus.STATUS_FAILURE;
			} else if (ctx.__typename === 'StatusContext' && ctx.state !== 'SUCCESS') {
				return pullRequestStatus.STATUS_PENDING;
			} else if (
				ctx.__typename === 'CheckRun' && ctx.conclusion !== 'SUCCESS'
			) {
				if (ctx.conclusion === 'FAILURE') {
					return pullRequestStatus.STATUS_FAILURE;
				} else if (ctx.conclusion !== 'COMPLETED') {
					return pullRequestStatus.STATUS_PENDING;
				}
			}
		}
	}

	if (reviewDecision === 'CHANGES_REQUESTED') {
		return pullRequestStatus.REVIEW_DISAPPROVED;
	} else if (reviewDecision === 'REVIEW_REQUIRED') {
		return viewerCanMergeAsAdmin ? pullRequestStatus.BYPASSABLE : pullRequestStatus.REVIEW_REQUIRED;
	}

	return pullRequestStatus.MERGEABLE;
};
