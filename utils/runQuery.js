/* eslint-disable object-curly-newline */
/* eslint-disable max-params */

'use strict';

const { graphql } = require('@octokit/graphql');

const buildQuery = require('./buildQuery');

module.exports = async function runQuery(pr, repo, sha, token) {
	const [owner, name] = repo.split('/');
	const response = await graphql(buildQuery({ name, owner, pr, sha }), {
		headers: {
			authorization: `token ${token}`,
		},
	});
	return response;
};
