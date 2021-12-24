'use strict';

const { graphql } = require('@octokit/graphql');

const buildQuery = require('./buildQuery');

module.exports = async function runQuery({ repo, pr, sha, token }) {
	const [owner, name] = repo.split('/');
	const response = await graphql(buildQuery({ name, owner, pr, sha }), {
		headers: {
			authorization: `token ${token}`,
		},
	});
	return response;
};
