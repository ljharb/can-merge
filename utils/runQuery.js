'use strict';
// const fs = require('fs');

const { graphql } = require('@octokit/graphql');
const buildQuery = require('./buildQuery');

module.exports = async function runQuery({ commit, repo, pr, sha, token }) {
	const [owner, name] = repo.split('/');
	let response = null;
	try {
		response = await graphql(buildQuery({ commit, name, owner, pr, sha }), {
			headers: {
				authorization: `token ${token}`,
			},
		});
		console.log('hi');
		console.log(response);
		console.log(buildQuery({ commit, name, owner, pr, sha }));

				// console.log('hi');
				// console.log(response);
				// const content = JSON.stringify(
				// 	buildQuery({ commit, name, owner, pr, sha })
				// );
				// fs.writeFile('status.txt', content);

	} catch (err) {
		throw err.message;
	}
	return response;
};
