import parsePullRequest from './parsePullRequest.mjs';
import runQuery from './runQuery.mjs';

/** @import { Params, PullRequest } from '../types/graphql.js' */

/**
 * @param {PullRequest[]} response
 * @param {Params} params
 * @returns {Promise<PullRequest[]>}
 */
export default async function getPRWithRequiredChecks(response, params) {
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
			return /** @type {PullRequest} */ (responseWithRequiredChecks.find((pr) => pr.number === newParams.pr));
		} catch (err) {
			throw /** @type {Error} */ (err).message;
		}
	}));
}
