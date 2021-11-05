/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */

'use strict';

const chalk = require('chalk');

const getConclusionString = ({ commits: { nodes } }) => nodes
	.map((node) => node.commit.statusCheckRollup?.state)
	.toString();
const doesPRHaveConflicts = (pullRequest) => pullRequest.mergeable === 'MERGEABLE';

const evaluateChecks = (statusCheckRollup, name) => {
	let pending = [];
	let failure = [];
	statusCheckRollup.contexts?.nodes?.forEach((node) => {
		if (name === 'statusCheck') {
			if (node.state === 'FAILURE' || node.state === 'ERROR') {
				failure.push(node.context);
			} else if (node.state === 'PENDING') {
				pending.push(node.context);
			}
		} else if (name === 'checkRun') {
			if (node.conclusion === 'FAILURE') {
				failure.push(node.name);
			} else if (node.status !== 'COMPLETED') {
				pending.push(node.name);
			}
		}
	});
	pending = pending.filter(Boolean);
	failure = failure.filter(Boolean);
	return { failure, pending };
};

// eslint-disable-next-line max-statements
module.exports = function evaluatePullRequest(pullRequest, response) {
	if (!pullRequest) {
		return false;
	}
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
				console.error(chalk.redBright('PR: ', number, '⚠ Some status checks are not successful'));
				const { failure, pending } = evaluateChecks(statusCheckRollup, 'statusCheck');
				if (pending.length) {
					console.info(chalk.yellowBright(`Pending Checks (${pending.length}): ${pending.join(', ')}`));
				}
				if (failure.length) {
					console.info(chalk.redBright(`Failed Checks (${failure.length}): ${failure.join(', ')}`));
				}
				return false;
			} else if (
				ctx.__typename === 'CheckRun' && ctx.conclusion !== 'SUCCESS'
			) {
				if (ctx.conclusion === 'FAILURE') {
					console.error(chalk.redBright('PR: ', number, '⚠ Some status checks are not successful'));
				} else if (ctx.conclusion !== 'COMPLETED') {
					console.info(chalk.yellowBright('PR: ', number, 'ℹ Some status checks are pending'));
				}
				const { failure, pending } = evaluateChecks(statusCheckRollup, 'checkRun');
				if (pending.length > 0) {
					console.info(chalk.yellowBright(`Pending Checks (${pending.length}): ${pending.join(', ')}`));
				}
				if (failure.length > 0) {
					console.info(chalk.redBright(`Failed Checks (${failure.length}): ${failure.join(', ')}`));
				}
				return false;
			}
		}
	}

	if (reviewDecision === 'APPROVED') {
		console.info(chalk.greenBright('PR: ', number, '✔ This PR has been approved'));
	} else if (reviewDecision === 'CHANGES_REQUESTED') {
		console.info(chalk.yellowBright('PR: ', number, 'ℹ There are requested changes on this PR - merging is blocked'));
		return false;
	} else if (reviewDecision === 'REVIEW_REQUIRED') {
		console.info(chalk.redBright('PR: ', number, 'ℹ This PR requires a review - merging is blocked'));
		return false;
	}

	console.info(chalk.greenBright('PR: ', number, '✔ This PR is mergeable'));
	return true;
};
