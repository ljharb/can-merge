import evaluatePending from './evaluatePending.mjs';

/** @import { QueryResponse } from '../types/graphql.js' */

/**
 * @param {number} retryDelay
 * @param {() => Promise<QueryResponse>} getResponse
 */
export default async function watch(retryDelay, getResponse) {
	const response = await getResponse();

	const isPendingChecks = evaluatePending(response);

	if (!isPendingChecks) {
		return response;
	}

	setTimeout(() => {
		process.stderr.write('.');
	}, retryDelay);

	return watch(retryDelay, getResponse);
}
