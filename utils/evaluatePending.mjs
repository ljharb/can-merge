/** @import { QueryResponse } from '../types/graphql.js' */

/** @param {QueryResponse} response */
export default function evaluatePending(response) {
	// @ts-expect-error optimistically assumes a status check rollup is present
	const pullRequestPending = response.search?.edges[0]?.node.commits.nodes[0].commit.statusCheckRollup.state === 'PENDING';
	// @ts-expect-error optimistically assumes a commit and status check rollup are present
	const commitRequestPending = response.repository?.commit.statusCheckRollup.state === 'PENDING';

	return pullRequestPending || commitRequestPending;
}
