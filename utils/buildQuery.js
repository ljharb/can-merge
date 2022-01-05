'use strict';

const pullRequestQuery = () => `
        state
        url
        title
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
`;

module.exports = function buildQuery({
	name,
	owner,
	pr,
	sha,
}) {
	return `
      {
        search(query: "is:open is:pr repo:${owner}/${name} ${sha ? `sha:${sha}` : ''} ${pr ? `pr: ${pr}` : ''}", type:ISSUE, first: 100) {
          issueCount
          edges {
            node {
              ... on PullRequest {
              ${pullRequestQuery()}
              }
            }
          }
        }
      }
  `;
};
