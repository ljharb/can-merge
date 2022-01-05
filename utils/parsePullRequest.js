'use strict';

module.exports = function parsePullRequest(response) {
	return response.search.edges.flatMap(({ node }) => node) || [];
};
