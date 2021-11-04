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

module.exports = function buildQuery(owner, name, pr) {
	return `
      {
        repository(owner: "${owner}", name: "${name}") {
          branchProtectionRules(first: 10) {
            nodes {
              requiresStatusChecks
              requiredApprovingReviewCount
              requiredStatusCheckContexts
            }
          }
          ${pr ? `pullRequest(number: ${pr}) {
            ${pullRequestQuery()}
          }` : `pullRequests(first: 100) {
            nodes {
              ${pullRequestQuery()}
            }
          }`}
        }
        rateLimit {
          cost
          remaining
        }
      }
    `;
};
