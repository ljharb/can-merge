/** @import { Check, CheckResults, PullRequest, StatusCheckRollup } from '../types/graphql.js' */

/**
 * @param {NonNullable<StatusCheckRollup>} statusCheckRollup
 * @param {string[] | null | undefined} requiredChecks
 * @returns {CheckResults}
 */
function parseStatusChecks(statusCheckRollup, requiredChecks) {
	/** @type {Check[]} */
	const pending = [];
	/** @type {Check[]} */
	const failure = [];

	statusCheckRollup.contexts?.nodes?.filter((node) => node.context).forEach((node) => {
		const name = /** @type {string} */ (node.context);
		if (node.state === 'FAILURE' || node.state === 'ERROR') {
			failure.push({
				name,
				isRequired: requiredChecks?.includes(name) ?? !!node.isRequired,
			});
		} else if (node.state === 'PENDING') {
			pending.push({
				name,
				isRequired: requiredChecks?.includes(name) ?? !!node.isRequired,
			});
		}
	});

	return { failure, pending };
}

/**
 * @param {NonNullable<StatusCheckRollup>} statusCheckRollup
 * @param {string[] | null | undefined} requiredChecks
 * @returns {CheckResults}
 */
function parseCheckRuns(statusCheckRollup, requiredChecks) {
	/** @type {Check[]} */
	const pending = [];
	/** @type {Check[]} */
	const failure = [];

	statusCheckRollup.contexts?.nodes?.filter((node) => node.name).forEach((node) => {
		const { name } = /** @type {{ name: string }} */ (node);
		if (node.conclusion === 'FAILURE') {
			failure.push({
				name,
				isRequired: requiredChecks?.includes(name) ?? !!node.isRequired,
			});
		} else if (node.status !== 'COMPLETED') {
			pending.push({
				name,
				isRequired: requiredChecks?.includes(name) ?? !!node.isRequired,
			});
		}
	});

	return { failure, pending };
}

/**
 * @param {PullRequest} pullRequest
 * @param {string[] | null | undefined} [requiredChecks]
 * @returns {CheckResults}
 */
export default function evaluateChecks(pullRequest, requiredChecks) {
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
}
