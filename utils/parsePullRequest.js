'use strict';

module.exports = function parsePullRequest(response) {
	return response.pullRequest
		? [response.pullRequest]
		: response.commit?.associatedPullRequests.edges.flatMap(({ node }) => node)
			|| response.pullRequests?.nodes
			|| [];
};
