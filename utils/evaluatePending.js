'use strict';

module.exports = function evaluatePending(response) {
	const { search: { edges: [{ node: { commits: { nodes: [{ commit: { statusCheckRollup } }] } } }] } } = response;

	// eslint-disable-next-line no-underscore-dangle
	const pending = statusCheckRollup.contexts.nodes.filter((ctx) => (ctx.__typename === 'CheckRun' && ctx.status !== 'COMPLETED') || (ctx.__typename === 'StatusContext' && ctx.state === 'PENDING'));

	return pending.length;
};
