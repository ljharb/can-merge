'use strict';

const { graphql } = require('@octokit/graphql');

const buildQuery = require('./buildQuery');

module.exports = async function runQuery(repo, pr, token) {
	const [owner, name] = repo.split('/');
	const response = await graphql(buildQuery(owner, name, pr), {
		headers: {
			authorization: `token ${token}`,
		},
	});
	return response;
};
