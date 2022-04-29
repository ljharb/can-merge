'use strict';

const { graphql } = require('@octokit/graphql');
const buildQuery = require('./buildQuery');
const { getCommitChecks } = require('./getCommitChecks');

module.exports = async function runQuery({ commit, repo, pr, sha, token }) {
	const [owner, name] = repo.split('/');
	let response = null;
	try {
		response = await graphql(buildQuery({ commit, name, owner, pr, sha }), {
			headers: {
				authorization: `token ${token}`,
			},
		});
		const nodes = await getCommitChecks(response, { commit, repo, pr, sha, token });
		response.search.edges[0].node.commits.nodes = nodes;
	} catch (err) {
		throw err.message;
	}
	return response;
};
