/* eslint-disable no-underscore-dangle */

'use strict';

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

module.exports = function evaluateChecks(pullRequest) {
	const { commits: { nodes: [{ commit: { statusCheckRollup } }] } } = pullRequest;

	for (const ctx of statusCheckRollup.contexts.nodes) {
		if (ctx.__typename === 'StatusContext' && ctx.state !== 'SUCCESS') {
			const { failure, pending } = parseChecks(statusCheckRollup, 'statusCheck');
			return { failure, pending };
		} else if (
			ctx.__typename === 'CheckRun' && ctx.conclusion !== 'SUCCESS'
		) {
			const { failure, pending } = parseChecks(statusCheckRollup, 'checkRun');
			return { failure, pending };
		}
	}

	return { failure: [], pending: [] };
};
