import { graphql } from '@octokit/graphql';
import buildQuery from './buildQuery.mjs';

/** @import { Params, QueryResponse } from '../types/graphql.js' */

/**
 * @param {Params} params
 * @returns {Promise<QueryResponse>}
 */
export default async function runQuery({ commit, repo, pr, sha, token }) {
	const [owner, name] = repo.split('/');
	try {
		return await graphql(buildQuery({ commit, name, owner, pr, sha }), {
			headers: {
				authorization: `token ${token}`,
			},
		});
	} catch (err) {
		throw /** @type {Error} */ (err).message;
	}
}
