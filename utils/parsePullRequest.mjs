/** @import { PullRequest, QueryResponse } from '../types/graphql.js' */

/**
 * @param {QueryResponse} response
 * @returns {PullRequest[]}
 */
export default function parsePullRequest(response) {
	return response.search.edges.flatMap(({ node }) => node) || [];
}
