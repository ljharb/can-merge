/* eslint-disable max-lines-per-function */

// eslint-disable-next-line max-params
function pullRequestQuery(name, owner, pr, sha) {
	return `
	search(query: "is:pr repo:${owner}/${name} ${sha ? `sha:${sha}` : ''} ${pr}", type:ISSUE, first: 100) {
		issueCount
		edges {
			node {
				... on PullRequest {
					state
					url
					title
					baseRef {
						name
						branchProtectionRule {
							isAdminEnforced
							requiredStatusCheckContexts
						}
					}
					author {
						login
					}
					viewerCanMergeAsAdmin
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
												${pr ? `isRequired(pullRequestNumber: ${pr})` : ''}
												conclusion
											}
											... on StatusContext {
												${pr ? `isRequired(pullRequestNumber: ${pr})` : ''}
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
}

function commitStatusQuery(name, owner, sha) {
	return `
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
}

export default function buildQuery({
	name,
	owner,
	pr,
	sha,
	commit,
}) {
	return `
		{
			${pullRequestQuery(name, owner, pr, sha)}
			${commit ? commitStatusQuery(name, owner, sha) : ''}
		}
	`;
}
