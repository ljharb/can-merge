/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

'use strict';

const { graphql } = require('@octokit/graphql');

let owner, name, token, repo, pr, sha, search;

const modifiedNodes = [];

const runCommitQuery = async ({ name, owner, sha, token }) => {
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

const doNodes = async (ogNode) => {
	const node = JSON.parse(JSON.stringify(ogNode));
	// console.log(JSON.stringify(node,undefined,2));
	const { commit } = node;
	const {
		author: {
			user: { url },
		},
		oid,
	} = commit;

	await runCommitQuery({
		name,
		owner: url.slice(url.lastIndexOf('/') + 1),
		sha: oid,
		token,
	}).then((commitChecks) => {
		const prchecks = commit.statusCheckRollup?.contexts.nodes ?? [];
		const allChecks = prchecks.concat(commitChecks || []);
		// modify the values only if checks are found
		if (allChecks.length > 0) {
			commit.statusCheckRollup.contexts.nodes = allChecks;
			commit.statusCheckRollup.contexts.totalCount = allChecks.length;
		}

	});
	modifiedNodes.push(node);
};

const getCommitChecks = async (response, data) => {
	({ repo, pr, sha, token } = data);
	[owner, name] = repo.split('/');
	({ search } = response);

	await search.edges.reduce(async (prev, edge) => {
		await prev;
		return edge.node.commits.nodes.reduce(
			async (prev, node) => {
				await prev;
				return doNodes(node);
			},
			Promise.resolve(),
		);
	}, Promise.resolve());

	return modifiedNodes;

};

module.exports = {
	getCommitChecks,
};
