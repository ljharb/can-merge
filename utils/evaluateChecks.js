'use strict';

function parseStatusChecks(statusCheckRollup, requiredChecks) {
	const pending = [];
	const failure = [];

	statusCheckRollup.contexts?.nodes?.filter((node) => node.context).forEach((node) => {
		if (node.state === 'FAILURE' || node.state === 'ERROR') {
			failure.push({
				name: node.context,
				isRequired: requiredChecks?.includes(node.context) ?? !!node.isRequired,
			});
		} else if (node.state === 'PENDING') {
			pending.push({
				name: node.context,
				isRequired: requiredChecks?.includes(node.context) ?? !!node.isRequired,
			});
		}
	});

	return { failure, pending };
}

function parseCheckRuns(statusCheckRollup, requiredChecks) {
	const pending = [];
	const failure = [];

	statusCheckRollup.contexts?.nodes?.filter((node) => node.name).forEach((node) => {
		if (node.conclusion === 'FAILURE') {
			failure.push({
				name: node.name,
				isRequired: requiredChecks?.includes(node.name) ?? !!node.isRequired,
			});
		} else if (node.status !== 'COMPLETED') {
			pending.push({
				name: node.name,
				isRequired: requiredChecks?.includes(node.name) ?? !!node.isRequired,
			});
		}
	});

	return { failure, pending };
}

module.exports = function evaluateChecks(pullRequest, requiredChecks) {
	const { commits: { nodes: [{ commit: { statusCheckRollup } }] } } = pullRequest;

	if (statusCheckRollup?.contexts?.nodes) {
		for (const ctx of statusCheckRollup.contexts.nodes) {
			/* eslint no-underscore-dangle: 0 */
			if (ctx.__typename === 'StatusContext' && ctx.state !== 'SUCCESS') {
				return parseStatusChecks(statusCheckRollup, requiredChecks);
			}
			if (ctx.__typename === 'CheckRun' && ctx.conclusion !== 'SUCCESS') {
				return parseCheckRuns(statusCheckRollup, requiredChecks);
			}
		}
	}

	return { failure: [], pending: [] };
};
