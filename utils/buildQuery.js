/* eslint-disable max-lines-per-function */

'use strict';

// eslint-disable-next-line max-params
const pullRequestQuery = (name, owner, pr, sha) => `
  search(query: "is:pr repo:${owner}/${name} ${sha ? `sha:${sha}` : ''} ${pr}", type:ISSUE, first: 100) {
    issueCount
    edges {
      node {
        ... on PullRequest {
          state
          url
          title
          author {
            login
          }
          number
          merged
          mergeable
          reviewDecision
          potentialMergeCommit {
            commitUrl
          }
          commits(last: 1) {
            nodes {
              commit {
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
        }
      }
    }
  }
  rateLimit {
    limit
    cost
    remaining
    resetAt
  }
`;

const commitStatusQuery = (name, owner, sha) => `
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

module.exports = function buildQuery({
	name,
	owner,
	pr,
	sha,
	commit,
}) {
	return `${commit
		? `{
          ${pullRequestQuery(name, owner, pr, sha)}
          ${commitStatusQuery(name, owner, sha)}
        }`
		: `{${pullRequestQuery(name, owner, pr, sha)}}`
	}`;
};
