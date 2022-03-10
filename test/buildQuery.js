'use strict';

/*
 * https://github.com/substack/tape
 * https://hackernoon.com/unit-testing-node-js-38cf2b7e1a41
 * node test/utils.test.js | ./node_modules/.bin/tap-spec
 * ./node_modules/.bin/tape test/utils.test.js
 * Can add ./node_modules/.bin to PATH to make things easier
 * Or run using npx tape (which knows to look in local ./node_modules/.bin)
 * e.g. npx tape test/*.js | npx tap-spec
 */
const test = require('tape');
const buildQuery = require('../utils/buildQuery');

test('New test - No Commit', (t) => {
	const result = buildQuery('Name', 'Owner', 'feature_name', null, null);
	const expected = `{
  search(query: "is:pr repo:ljharb/can-merge sha:03e33a92ef undefined", type:ISSUE, first: 100) {
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
}`;
	t.looseEqual(result, expected, 'should be the right info');
	t.end();
});

/*
 * test('New test - Has Commit', (t) => {
 *     const short = getSHA(root, true);
 *     const result = buildQuery('Name', 'Owner', 'pr', short, null)
 *     const expected = `
 *     {search(query: "is:pr repo:Owner/Name ${short ? `sha:${short}` : ''} pr", type:ISSUE, first: 100) {
 *       issueCount
 *       edges {
 *         node {
 *           ... on PullRequest {
 *             state
 *             url
 *             title
 *             author {
 *               login
 *             }
 *             number
 *             merged
 *             mergeable
 *             reviewDecision
 *             potentialMergeCommit {
 *               commitUrl
 *             }
 *             commits(last: 1) {
 *               nodes {
 *                 commit {
 *                   statusCheckRollup {
 *                     state
 *                     contexts(last: 100) {
 *                       totalCount
 *                       pageInfo {
 *                         endCursor
 *                         hasNextPage
 *                       }
 *                       nodes {
 *                         __typename
 *                         ... on CheckRun {
 *                           status
 *                           name
 *                           conclusion
 *                         }
 *                         ... on StatusContext {
 *                           state
 *                           context
 *                           description
 *                         }
 *                       }
 *                     }
 *                   }
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *     }
 *    }`
 *     t.equal(result, expected, 'should be the right info')
 *     t.end();
 * })
 */
