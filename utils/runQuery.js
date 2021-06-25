'use strict';

const { graphql } = require('@octokit/graphql');

const buildQuery = require('./buildQuery');

const runQuery = async (repo, pr, token) => {
	const [owner, name] = repo.split('/');
	const response = await graphql(buildQuery(owner, name, pr), {
		headers: {
			authorization: `token ${token}`,
		},
	});
	return response;
};

module.exports = runQuery;
