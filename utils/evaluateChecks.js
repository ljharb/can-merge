'use strict';

function parseStatusChecks(statusCheckRollup) {
	const pending = [];
	const failure = [];

	statusCheckRollup.contexts?.nodes?.filter((node) => node.context).forEach((node) => {
		if (node.state === 'FAILURE' || node.state === 'ERROR') {
			failure.push(node.context);
		} else if (node.state === 'PENDING') {
			pending.push(node.context);
		}
	});

	return { failure, pending };
}

function parseCheckRuns(statusCheckRollup) {
	const pending = [];
	const failure = [];

	statusCheckRollup.contexts?.nodes?.filter((node) => node.name).forEach((node) => {
		if (node.conclusion === 'FAILURE') {
			failure.push(node.name);
		} else if (node.status !== 'COMPLETED') {
			pending.push(node.name);
		}
	});

	return { failure, pending };
}

module.exports = function evaluateChecks(pullRequest) {
	const { commits: { nodes: [{ commit: { statusCheckRollup } }] } } = pullRequest;

	if (statusCheckRollup?.contexts?.nodes) {
		for (const ctx of statusCheckRollup.contexts.nodes) {
			/* eslint no-underscore-dangle: 0 */
			if (ctx.__typename === 'StatusContext' && ctx.state !== 'SUCCESS') {
				return parseStatusChecks(statusCheckRollup);
			}
			if (ctx.__typename === 'CheckRun' && ctx.conclusion !== 'SUCCESS') {
				return parseCheckRuns(statusCheckRollup);
			}
		}
	}

	return { failure: [], pending: [] };
};
