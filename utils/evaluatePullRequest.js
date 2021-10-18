/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */

'use strict';

const chalk = require('chalk');

const getConclusionString = ({ commits: { nodes } }) => nodes
	.map((node) => node.commit.statusCheckRollup?.state)
	.toString();
const doesPRHaveConflicts = (pullRequest) => pullRequest.mergeable === 'MERGEABLE';

// eslint-disable-next-line max-statements
const evaluatePullRequest = (pullRequest, response) => {
	const {
		number,
		state,
		merged,
		reviewDecision,
	} = pullRequest;

	if (state !== 'OPEN') {
		if (merged) {
			console.info(chalk.blueBright('PR:', number, 'ℹ This PR is already merged'));
		}
		return false;
	}

	if (!doesPRHaveConflicts(pullRequest)) {
		console.info(chalk.redBright('PR:', number, '⚠ There are merge conflicts with the base branch'));
		return false;
	}

	const conclusion = getConclusionString(pullRequest);
	if (conclusion !== 'SUCCESS' && conclusion !== 'FAILURE') {
		if (conclusion === 'PENDING') {
			console.info(chalk.yellowBright('PR:', number, 'ℹ Some checks are pending'));
			return false;
		}
	} else if (conclusion) {
		const { repository: { pullRequest: { commits: { nodes: [{ commit: { statusCheckRollup } }] } } } } = response;

		for (const ctx of statusCheckRollup.contexts.nodes) {
			if (ctx.__typename === 'StatusContext' && ctx.state !== 'SUCCESS') {
				console.error(chalk.redBright('PR:', number, '⚠ Some status checks are not successful'));
				return false;
			} else if (
				ctx.__typename === 'CheckRun' && ctx.conclusion !== 'SUCCESS'
			) {
				if (ctx.conclusion === 'FAILURE') {
					console.error(chalk.redBright('PR:', number, '⚠ Some status checks are not successful'));
				} else if (ctx.conclusion !== 'COMPLETED') {
					console.info(chalk.yellowBright('PR:', number, 'ℹ Some status checks are pending'));
				}
				return false;
			}
		}
	}

	if (reviewDecision === 'APPROVED') {
		console.info(chalk.greenBright('PR:', number, '✔ This PR has been approved'));
	} else if (reviewDecision === 'CHANGES_REQUESTED') {
		console.info(chalk.yellowBright('PR:', number, 'ℹ There are requested changes on this PR - merging is blocked'));
		return false;
	} else if (reviewDecision === 'REVIEW_REQUIRED') {
		console.info(chalk.redBright('PR:', number, 'ℹ This PR requires a review - merging is blocked'));
		return false;
	}

	console.info(chalk.greenBright('PR:', number, '✔ This PR is mergeable'));
	return true;
};

module.exports = evaluatePullRequest;
