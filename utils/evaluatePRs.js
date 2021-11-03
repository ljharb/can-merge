'use strict';

const evaluatePullRequest = require('./evaluatePullRequest');
const logger = require('../utils/logger');

module.exports = function evaluatePRs(pr, response) {
	const { pullRequest } = response.repository;
	if (pr && !pullRequest) {
		return false;
	}

	const prArgs = pr ? [[pullRequest, response]] : [].concat(response.repository.pullRequests?.nodes || [])
		.map((node) => [node, { repository: { pullRequest: node } }]);

	if (prArgs.length === 0) {
		return false;
	}
	return prArgs.length > 0 && prArgs
		.reduce((status, [node, resp]) => console.info('PR:', node.number, logger(evaluatePullRequest(resp))) && status, true);
};
