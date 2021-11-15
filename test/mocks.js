'use strict';

const pullRequestStatus = require('../utils/models/pullRequestStatus');

const mockEvalPR = [
	{
		res: {
			repository: {
				branchProtectionRules: {
					nodes: [],
				},
				pullRequest: {
					state: 'OPEN',
					url: 'https://github.com/facebook/react/pull/21829',
					title:
						"[package:react-dom] updateREADME's Class Component to Function Component",
					number: 21829,
					merged: false,
					mergeable: 'MERGEABLE',
					reviewDecision: null,
					potentialMergeCommit: {
						commitUrl:
							'https://github.com/facebook/react/commit/2b565ef0bf81d5964a577ee5f07bb093d0358828',
					},
					commits: {
						nodes: [
							{
								commit: {
									statusCheckRollup: {
										state: 'FAILURE',
										contexts: {
											totalCount: 33,
											pageInfo: {
												endCursor: 'MzM',
												hasNextPage: false,
											},
											nodes: [
												{
													__typename: 'StatusContext',
													state: 'FAILURE',
													context: 'ci/circleci: get_base_build',
													description: 'Your tests failed on CircleCI',
												},
												{
													__typename: 'StatusContext',
													state: 'FAILURE',
													context: 'ci/circleci: sync_reconciler_forks',
													description: 'Your tests failed on CircleCI',
												},
												{
													__typename: 'CheckRun',
													status: 'COMPLETED',
													name: 'Facebook CLA Check',
													conclusion: 'SUCCESS',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: RELEASE_CHANNEL_stable_yarn_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: RELEASE_CHANNEL_stable_yarn_test_dom_fixtures',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: build_devtools_and_process_artifacts',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: build_devtools_scheduling_profiler',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: process_artifacts_combined',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: setup',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_build_combined',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_flow',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_lint',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_lint_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=experimental --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=experimental --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=development --persistent',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=development --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=development --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=production --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=production --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=development --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=development --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=production --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=production --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build---project=devtools -r=experimental',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=experimental --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=experimental --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=stable --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=stable --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/codesandbox',
													description: 'Building packages succeeded.',
												},
											],
										},
									},
								},
							},
						],
					},
				},
			},
			rateLimit: {
				cost: 1,
				remaining: 4997,
			},
		},
		expected: pullRequestStatus.STATUS_FAILURE,
		description: 'evaluation of a PR with FAILURE should return STATUS_FAILURE',
	},
	{
		res: {
			repository: {
				branchProtectionRules: {
					nodes: [],
				},
				pullRequest: {
					state: 'OPEN',
					url: 'https://github.com/facebook/react/pull/21770',
					title: 'Bump ini from 1.3.4 to 1.3.8 in /scripts/bench',
					number: 21770,
					merged: false,
					mergeable: 'MERGEABLE',
					reviewDecision: null,
					potentialMergeCommit: {
						commitUrl:
							'https://github.com/facebook/react/commit/1dd6f0b8c2d792a784134458c2897c12de86895b',
					},
					commits: {
						nodes: [
							{
								commit: {
									statusCheckRollup: {
										state: 'PENDING',
										contexts: {
											totalCount: 34,
											pageInfo: {
												endCursor: 'MzQ',
												hasNextPage: false,
											},
											nodes: [
												{
													__typename: 'StatusContext',
													state: 'PENDING',
													context: 'ci/circleci: sync_reconciler_forks',
													description: 'CircleCI is running your tests',
												},
												{
													__typename: 'StatusContext',
													state: 'PENDING',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=development --variant=true',
													description: 'CircleCI is running your tests',
												},
												{
													__typename: 'CheckRun',
													status: 'COMPLETED',
													name: 'Facebook CLA Check',
													conclusion: 'SUCCESS',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: RELEASE_CHANNEL_stable_yarn_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: RELEASE_CHANNEL_stable_yarn_test_dom_fixtures',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: build_devtools_and_process_artifacts',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: build_devtools_scheduling_profiler',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: get_base_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: process_artifacts_combined',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: setup',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: sizebot',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_build_combined',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_flow',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_lint',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_lint_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=experimental --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=experimental --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=development --persistent',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=development --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=production --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=production --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=development --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=development --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=production --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=production --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build---project=devtools -r=experimental',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=experimental --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=experimental --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=stable --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=stable --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/codesandbox',
													description: 'Building packages succeeded.',
												},
											],
										},
									},
								},
							},
						],
					},
				},
			},
			rateLimit: {
				cost: 1,
				remaining: 4994,
			},
		},
		expected: pullRequestStatus.STATUS_PENDING,
		description: 'evalutation of a PR with PENDING should return STATUS_PENDING',
	},
	{
		res: {
			repository: {
				branchProtectionRules: {
					nodes: [],
				},
				pullRequest: {
					state: 'OPEN',
					url: 'https://github.com/facebook/react/pull/21766',
					title:
						'fix: restore execution context after RetryAfterError completed',
					number: 21766,
					merged: false,
					mergeable: 'MERGEABLE',
					reviewDecision: null,
					potentialMergeCommit: {
						commitUrl:
							'https://github.com/facebook/react/commit/6a02a00cd0356e43978b4ce090b7c25ad9be86c1',
					},
					commits: {
						nodes: [
							{
								commit: {
									statusCheckRollup: {
										state: 'SUCCESS',
										contexts: {
											totalCount: 34,
											pageInfo: {
												endCursor: 'MzQ',
												hasNextPage: false,
											},
											nodes: [
												{
													__typename: 'CheckRun',
													status: 'COMPLETED',
													name: 'Facebook CLA Check',
													conclusion: 'SUCCESS',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: RELEASE_CHANNEL_stable_yarn_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: RELEASE_CHANNEL_stable_yarn_test_dom_fixtures',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: build_devtools_and_process_artifacts',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: build_devtools_scheduling_profiler',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: get_base_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: process_artifacts_combined',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: setup',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: sizebot',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: sync_reconciler_forks',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_build_combined',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_flow',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_lint',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/circleci: yarn_lint_build',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=experimental --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=experimental --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=development --persistent',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=stable --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=development --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=development --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=production --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-classic --env=production --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=development --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=development --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=production --variant=false',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test--r=www-modern --env=production --variant=true',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build---project=devtools -r=experimental',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=experimental --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=experimental --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=stable --env=development',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context:
														'ci/circleci: yarn_test_build--r=stable --env=production',
													description: 'Your tests passed on CircleCI!',
												},
												{
													__typename: 'StatusContext',
													state: 'SUCCESS',
													context: 'ci/codesandbox',
													description: 'Building packages succeeded.',
												},
											],
										},
									},
								},
							},
						],
					},
				},
			},
			rateLimit: {
				cost: 1,
				remaining: 4992,
			},
		},
		expected: pullRequestStatus.MERGEABLE,
		description: 'evaluation of a PR with SUCCESS should return MERGEABLE',
	},
];
const mockParsePR = [
	{

		repository: {
			branchProtectionRules: {
				nodes: [],
			},
			pullRequests: {
				nodes: [],
			},
		},
		rateLimit: {
			cost: 2,
			remaining: 4959,
		},

		expected: [],
		description: 'No pr found: No pr found in repository should return an empty array',
	},
	{

		repository: {
			branchProtectionRules: {
				nodes: [],
			},
			pullRequest: {
				state: 'OPEN',
				url: 'https://github.com/MeghalBisht/dummy-repo/pull/1',
				title: 'dummy PR',
				number: 1,
				merged: false,
				mergeable: 'MERGEABLE',
				reviewDecision: null,
				potentialMergeCommit: {
					commitUrl:
						'https://github.com/MeghalBisht/dummy-repo/commit/1f197b41bfd76a2fb5480a6af5a6bc6d06a7f6e7',
				},
				commits: {
					nodes: [
						{
							commit: {
								statusCheckRollup: null,
							},
						},
					],
				},
			},
		},
		rateLimit: {
			cost: 2,
			remaining: 4945,
		},

		expected: [
			{
				state: 'OPEN',
				url: 'https://github.com/MeghalBisht/dummy-repo/pull/1',
				title: 'dummy PR',
				number: 1,
				merged: false,
				mergeable: 'MERGEABLE',
				reviewDecision: null,
				potentialMergeCommit: {
					commitUrl:
						'https://github.com/MeghalBisht/dummy-repo/commit/1f197b41bfd76a2fb5480a6af5a6bc6d06a7f6e7',
				},
				commits: {
					nodes: [
						{
							commit: {
								statusCheckRollup: null,
							},
						},
					],
				},
			},
		],
		description: 'One pr found: One pr found should return an array of length === 1',
	},
	{

		repository: {
			branchProtectionRules: {
				nodes: [],
			},
			commit: {
				associatedPullRequests: {
					edges: [
						{
							node: [
								{
									state: 'OPEN',
									url: 'https://github.com/MeghalBisht/dummy-repo/pull/1',
									title: 'dummy PR',
									number: 1,
									merged: false,
									mergeable: 'MERGEABLE',
									reviewDecision: null,
									potentialMergeCommit: {
										commitUrl:
											'https://github.com/MeghalBisht/dummy-repo/commit/1f197b41bfd76a2fb5480a6af5a6bc6d06a7f6e7',
									},
									commits: {
										nodes: [
											{
												commit: {
													statusCheckRollup: null,
												},
											},
										],
									},
								},
							],
						},
						{
							node: [
								{
									state: 'OPEN',
									url: 'https://github.com/MeghalBisht/dummy-repo/pull/2',
									title: 'dummy PR 2',
									number: 2,
									merged: false,
									mergeable: 'MERGEABLE',
									reviewDecision: null,
									potentialMergeCommit: {
										commitUrl:
											'https://github.com/MeghalBisht/dummy-repo/commit/636e6f943e0dd719b49aeec53991a0e7384a684d',
									},
									commits: {
										nodes: [
											{
												commit: {
													statusCheckRollup: null,
												},
											},
										],
									},
								},
							],
						},
						{
							node: [
								{
									state: 'OPEN',
									url: 'https://github.com/MeghalBisht/dummy-repo/pull/3',
									title: 'dummy PR 3',
									number: 3,
									merged: false,
									mergeable: 'MERGEABLE',
									reviewDecision: null,
									potentialMergeCommit: {
										commitUrl:
											'https://github.com/MeghalBisht/dummy-repo/commit/0ffc1461f1ad736fa27ee1c38856cff5611673e1',
									},
									commits: {
										nodes: [
											{
												commit: {
													statusCheckRollup: null,
												},
											},
										],
									},
								},
							],
						},
					],
				},
			},
		},
		rateLimit: {
			cost: 2,
			remaining: 4997,
		},
		expected: [
			{
				state: 'OPEN',
				url: 'https://github.com/MeghalBisht/dummy-repo/pull/1',
				title: 'dummy PR',
				number: 1,
				merged: false,
				mergeable: 'MERGEABLE',
				reviewDecision: null,
				potentialMergeCommit: {
					commitUrl:
						'https://github.com/MeghalBisht/dummy-repo/commit/1f197b41bfd76a2fb5480a6af5a6bc6d06a7f6e7',
				},
				commits: {
					nodes: [
						{
							commit: {
								statusCheckRollup: null,
							},
						},
					],
				},
			},
			{
				state: 'OPEN',
				url: 'https://github.com/MeghalBisht/dummy-repo/pull/2',
				title: 'dummy PR 2',
				number: 2,
				merged: false,
				mergeable: 'MERGEABLE',
				reviewDecision: null,
				potentialMergeCommit: {
					commitUrl:
						'https://github.com/MeghalBisht/dummy-repo/commit/636e6f943e0dd719b49aeec53991a0e7384a684d',
				},
				commits: {
					nodes: [
						{
							commit: {
								statusCheckRollup: null,
							},
						},
					],
				},
			},
			{
				state: 'OPEN',
				url: 'https://github.com/MeghalBisht/dummy-repo/pull/3',
				title: 'dummy PR 3',
				number: 3,
				merged: false,
				mergeable: 'MERGEABLE',
				reviewDecision: null,
				potentialMergeCommit: {
					commitUrl:
						'https://github.com/MeghalBisht/dummy-repo/commit/0ffc1461f1ad736fa27ee1c38856cff5611673e1',
				},
				commits: {
					nodes: [
						{
							commit: {
								statusCheckRollup: null,
							},
						},
					],
				},
			},
		],
		description: 'Multiple prs found: multiple prs found should return all prs',
	},
];

module.exports = {
	mockEvalPR,
	mockParsePR,
};
