'use strict';

module.exports = function evaluatePending(response) {
	const pullRequestPending = response.search?.edges[0]?.node.commits.nodes[0].commit.statusCheckRollup.state === 'PENDING';
	const commitRequestPending = response.repository?.commit.statusCheckRollup.state === 'PENDING';

	return pullRequestPending || commitRequestPending;
};
