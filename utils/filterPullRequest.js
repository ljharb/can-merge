'use strict';

const parsePullRequest = require('../utils/parsePullRequest');

module.exports = function filterPullRequest(response, argPr) {
	const parsedResponse = parsePullRequest(response);

	return argPr ? parsedResponse.filter((pr) => String(pr.number) === argPr) : parsedResponse;
};
