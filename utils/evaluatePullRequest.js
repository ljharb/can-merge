'use strict';

const pullRequestStatus = require('./models/pullRequestStatus');
const evaluateChecks = require('./evaluateChecks');
const doesPRHaveConflicts = (pullRequest) => pullRequest.mergeable === 'MERGEABLE';

module.exports = function evaluatePullRequest(response, requiredChecks) {
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

	if (reviewDecision === 'CHANGES_REQUESTED') {
		return pullRequestStatus.REVIEW_DISAPPROVED;
	}

	if (reviewDecision === 'REVIEW_REQUIRED') {
		return viewerCanMergeAsAdmin ? pullRequestStatus.BYPASSABLE : pullRequestStatus.REVIEW_REQUIRED;
	}

	const { failure, pending } = evaluateChecks(response, requiredChecks);

	if (failure.some((f) => f.isRequired)) {
		return pullRequestStatus.STATUS_FAILURE;
	}

	if (pending.some((p) => p.isRequired)) {
		return pullRequestStatus.STATUS_PENDING;
	}

	return pullRequestStatus.MERGEABLE;
};
