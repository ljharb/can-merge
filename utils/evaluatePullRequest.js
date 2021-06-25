/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */

'use strict';

const chalk = require('chalk');

const getPRState = require('./getPRState');
const isMerged = require('./isMerged');
const getConclusionString = require('./getConclusionString');
const getMergeConflictStatus = require('./getMergeConflictStatus');
const getReviewDecision = require('./getReviewDecision');

// eslint-disable-next-line max-statements
const evaluatePullRequest = (response) => {
	if (getPRState(response) !== 'OPEN') {
		if (isMerged(response)) {
			console.info(chalk.blueBright('ℹ This PR is already merged'));
		}
		return false;
	}

	if (!getMergeConflictStatus(response)) {
		console.info(chalk.redBright('⚠ There are merge conflicts with the base branch'));
		return false;
	}

	const conclusion = getConclusionString(response);
	const reviewDecision = getReviewDecision(response);

	if (conclusion) {
		if (conclusion !== 'SUCCESS' && conclusion !== 'FAILURE') {
			if (conclusion === 'PENDING') {
				console.info(chalk.yellowBright('ℹ Some checks are pending'));
				return false;
			}
		}

		const { repository: { pullRequest: { commits: { nodes: [{ commit: { statusCheckRollup } }] } } } } = response;

		for (const ctx of statusCheckRollup.contexts.nodes) {
			if (ctx.__typename === 'StatusContext' && ctx.state !== 'SUCCESS') {
				console.error(chalk.redBright('⚠ Some status checks are not successful'));
				return false;
			} else if (
				ctx.__typename === 'CheckRun' && ctx.conclusion !== 'SUCCESS'
			) {
				if (ctx.conclusion === 'FAILURE') {
					console.error(chalk.redBright('⚠ Some status checks are not successful'));
				} else if (ctx.conclusion !== 'COMPLETED') {
					console.info(chalk.yellowBright('ℹ Some status checks are pending'));
				}
				return false;
			}
		}
	}

	if (reviewDecision) {
		if (reviewDecision === 'APPROVED') {
			console.info(chalk.greenBright('✔ This PR has been approved'));
		} else if (reviewDecision === 'CHANGES_REQUESTED') {
			console.info(chalk.yellowBright('ℹ There are requested changes on this PR - merging is blocked'));
			return false;
		} else if (reviewDecision === 'REVIEW_REQUIRED') {
			console.info(chalk.redBright('ℹ This PR requires a review - merging is blocked'));
			return false;
		}
	}

	console.info(chalk.greenBright('✔ This PR is mergeable'));
	return true;
};

module.exports = evaluatePullRequest;
