/* eslint-disable no-underscore-dangle */

'use strict';

const chalk = require('chalk');

const parseChecks = (statusCheckRollup, name) => {
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

module.exports = function evaluateChecks(response) {
	const { repository: { pullRequest: { commits: { nodes: [{ commit: { statusCheckRollup } }] } } } } = response;

	for (const ctx of statusCheckRollup.contexts.nodes) {
		if (ctx.__typename === 'StatusContext' && ctx.state !== 'SUCCESS') {
			const { failure, pending } = parseChecks(statusCheckRollup, 'statusCheck');
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
			const { failure, pending } = parseChecks(statusCheckRollup, 'checkRun');
			if (pending.length > 0) {
				console.info(chalk.yellowBright(`Pending Checks (${pending.length}): ${pending.join(', ')}`));
			}
			if (failure.length > 0) {
				console.info(chalk.redBright(`Failed Checks (${failure.length}): ${failure.join(', ')}`));
			}
			return false;
		}
	}

	return true;
};
