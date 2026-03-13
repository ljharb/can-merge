import { graphql } from '@octokit/graphql';
import buildQuery from './buildQuery.mjs';

export default async function runQuery({ commit, repo, pr, sha, token }) {
	const [owner, name] = repo.split('/');
	let response = null;
	try {
		response = await graphql(buildQuery({ commit, name, owner, pr, sha }), {
			headers: {
				authorization: `token ${token}`,
			},
		});
	} catch (err) {
		throw err.message;
	}
	return response;
}
