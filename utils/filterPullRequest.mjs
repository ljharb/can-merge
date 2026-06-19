import parsePullRequest from './parsePullRequest.mjs';

/** @import { PullRequest, QueryResponse } from '../types/graphql.js' */

/**
 * @param {QueryResponse} response
 * @param {string} [argPr]
 * @returns {PullRequest[]}
 */
export default function filterPullRequest(response, argPr) {
	const parsedResponse = parsePullRequest(response);

	return argPr
		? parsedResponse.filter((pr) => String(pr.number) === argPr)
		: parsedResponse;
}
