'use strict';

const path = require('path');
const { writeFile } = require('fs/promises');

const buildQuery = require('../utils/buildQuery');
const evaluatePullRequest = require('../utils/evaluatePullRequest');
const runQuery = require('../utils/runQuery');

const { repositories } = require('./repos.json');

const buildTestQuery = (repo, lastN = 1) => {
	const [owner, name] = repo.split('/');
	return `
	{
        repository(owner: "${owner}", name: "${name}") {
          pullRequests(last: ${lastN}) {
						edges {
							node {
								state
								url
								title
								number
							}
						}
					}
        }
        rateLimit {
          cost
          remaining
        }
      }
	`;
};

(async () => {
	const mocks = [];

	const repoResponses = repositories.map(async (repo) => {
		const token = process.env.GITHUB_TOKEN;
		const response = await runQuery(buildTestQuery(repo), token);

		if (process.env.NODE_ENV === 'DEBUG') {
			console.log(JSON.stringify(response, null, 2));
		}

		const pullRequests = response.repository.pullRequests.edges.map(({ node }) => node.number);

		const prResponses = pullRequests.map(async (pr) => {
			const res = await runQuery(buildQuery(repo, pr), token);
			console.log(`Fetching status of last pull request for ${repo}...`);
			const expected = evaluatePullRequest(res);
			const { repository: { pullRequest: { commits: { nodes: [{ commit: { statusCheckRollup } }] } } } } = res;
			mocks.push({
				description: `evaluation of a PR with ${statusCheckRollup.state} should return ${expected}`,
				expected,
				res,
			});
		});

		await Promise.all(prResponses);
	});

	await Promise.all(repoResponses);
	await writeFile(path.join(__dirname, 'mocks.json'), JSON.stringify(mocks, null, 2), 'utf8');
})();
