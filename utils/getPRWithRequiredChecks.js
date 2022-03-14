'use strict';

const parsePullRequest = require('./parsePullRequest');
const runQuery = require('./runQuery');

module.exports = async function getPRWithRequiredChecks(response, params) {
	// If --pr is specified
	if (params.pr) {
		return response.filter((pr) => String(pr.number) === params.pr);
	}

	// If user is admin branchProtectionRule is returned
	if (response[0]?.baseRef?.branchProtectionRule) {
		return response;

	}

	// If --pr is not specified run again to get isRequired
	return Promise.all(response.map(async (PR) => {
		const newParams = { ...params, pr: PR.number };
		try {
			const newResponse = await runQuery(newParams);
			const responseWithRequiredChecks = parsePullRequest(newResponse);
			return responseWithRequiredChecks.find((pr) => pr.number === newParams.pr);
		} catch (err) {
			throw err.message;
		}
	}));
};
