'use strict';

const { graphql } = require('@octokit/graphql');
const buildQuery = require('./buildQuery');

const getCommitChecks = async (name, owner, sha, token) => {
	const q = `
		repository(name: "${name}", owner: "${owner}") {
			commit: object(expression: "${sha}") {
				... on Commit {
					statusCheckRollup {
						state
						contexts(last: 100) {
							totalCount
							pageInfo {
								endCursor
								hasNextPage
							}
						nodes {
							__typename
							... on CheckRun {
								status
								name
								conclusion
							}
							... on StatusContext {
								state
								context
								description
							}
						}
					}
				}
			}
		}
	}
`;

	try {
		const response = await graphql(`{${q}}`, {
			headers: {
				authorization: `token ${token}`,
			},
		});
		return response.repository.commit?.statusCheckRollup?.contexts?.nodes;
	} catch (error) {
		console.log(error);
		return null;
	}
};

module.exports = async function runQuery({ commit, repo, pr, sha, token }) {
	const [owner, name] = repo.split('/');
	let response = null;
	try {
		response = await graphql(buildQuery({ commit, name, owner, pr, sha }), {
			headers: {
				authorization: `token ${token}`,
			},
		});
		const { search, repository } = response;

		const doNodes = async ({ commit }) =>{
			const {
				author: {
					user: { url },
				},
				oid,
			} = commit;
			// get the commit checks for the commit that ran on the fork
			await getCommitChecks(
				name,
				url.split('/').slice(-1).shift(),
				oid,
				token
			).then((commitChecks) => {
				const prchecks = commit.statusCheckRollup?.contexts.nodes ?? [];
				const allChecks = prchecks.concat(commitChecks || []);
				// modify the values only if checks are found
				if (allChecks.length > 0) {
					commit.statusCheckRollup.contexts.nodes = allChecks;
					commit.statusCheckRollup.contexts.totalCount = allChecks.length;
				}

			});
		};

		await search.edges.reduce(async (prev, edge) => {
			await prev;
			return edge.node.commits.nodes.reduce(
				async (prev, node) => {
					await prev;
					return doNodes(node);
				},
				Promise.resolve()
			);
		});
	} catch (err) {
		throw err.message;
	}
	return response;
};
