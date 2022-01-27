'use strict';

const { graphql } = require('@octokit/graphql');
const buildQuery = require('./buildQuery');

module.exports = async function runQuery({ repo, pr, sha, token }) {
	const [owner, name] = repo.split('/');
	let response = null;
	try {
		response = await graphql(buildQuery({ name, owner, pr, sha }), {
			headers: {
				authorization: `token ${token}`,
			},
		});
	} catch (err) {
		throw err.message;
	}
	return response;
};
