'use strict';

module.exports = function parsePullRequest(response) {
	return [].concat(response.pullRequest ? response.pullRequest : response.pullRequests?.nodes || []);
};
