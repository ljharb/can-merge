"use strict";

/* eslint quotes: ["error", "double"], "quote-props": ["error", "always"], "comma-dangle": ["error", "never"]
 */
/* eslint-disable no-template-curly-in-string */

module.exports = {
	"commitChecks": {
		"search": {
			"issueCount": 1,
			"edges": [
				{
					"node": {
						"state": "OPEN",
						"url": "https://github.com/Common1818/ca-merge/pull/1",
						"title": "change",
						"author": {
							"login": "PriyaBihani"
						},
						"viewerCanMergeAsAdmin": false,
						"number": 1,
						"merged": false,
						"mergeable": "MERGEABLE",
						"reviewDecision": null,
						"potentialMergeCommit": {
							"commitUrl": "https://github.com/Common1818/ca-merge/commit/4d41dd421656f359d6546fb4527999cb0470828e"
						},
						"commits": {
							"nodes": [
								{
									"commit": {
										"oid": "26fbc326c5f4fafe48a4ae0092917df7bcde5a61",
										"author": {
											"user": {
												"url": "https://github.com/PriyaBihani"
											}
										},
										"statusCheckRollup": {
											"state": "FAILURE",
											"contexts": {
												"totalCount": 2,
												"pageInfo": {
													"endCursor": "Mg",
													"hasNextPage": false
												},
												"nodes": [
													{
														"__typename": "CheckRun",
														"status": "COMPLETED",
														"name": "Automatic Rebase",
														"conclusion": "FAILURE"
													},
													{
														"__typename": "CheckRun",
														"status": "COMPLETED",
														"name": "Require “Allow Edits”",
														"conclusion": "SUCCESS"
													}
												]
											}
										}
									}
								}
							]
						}
					}
				}
			]
		},
		"rateLimit": {
			"limit": 5000,
			"cost": 1,
			"remaining": 4982,
			"resetAt": "2022-03-31T11:18:40Z"
		},
		"repository": {
			"commit": {
				"statusCheckRollup": {
					"state": "FAILURE",
					"commit": {
						"author": {
							"user": {
								"url": "https://github.com/PriyaBihani"
							}
						}
					},
					"contexts": {
						"totalCount": 2,
						"pageInfo": {
							"endCursor": "Mg",
							"hasNextPage": false
						},
						"nodes": [
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "Automatic Rebase",
								"conclusion": "FAILURE"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "Require “Allow Edits”",
								"conclusion": "SUCCESS"
							}
						]
					}
				}
			}
		}
	},
	"expected": [
		{
			"commit": {
				"oid": "26fbc326c5f4fafe48a4ae0092917df7bcde5a61",
				"author": {
					"user": {
						"url": "https://github.com/PriyaBihani"
					}
				},
				"statusCheckRollup": {
					"state": "FAILURE",
					"contexts": {
						"totalCount": 11,
						"pageInfo": {
							"endCursor": "Mg",
							"hasNextPage": false
						},
						"nodes": [
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "Automatic Rebase",
								"conclusion": "FAILURE"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "Require “Allow Edits”",
								"conclusion": "SUCCESS"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "tests / pretest",
								"conclusion": "FAILURE"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "tests / matrix",
								"conclusion": "SUCCESS"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "tests / latest minors (17.8)",
								"conclusion": "FAILURE"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "tests / posttest",
								"conclusion": "FAILURE"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "tests / latest minors (16.14)",
								"conclusion": "FAILURE"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "tests / latest minors (14.19)",
								"conclusion": "FAILURE"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "tests / non-latest minors",
								"conclusion": "NEUTRAL"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "tests / node ${{ inputs.type }} @ ${{ inputs.range }}",
								"conclusion": "NEUTRAL"
							},
							{
								"__typename": "CheckRun",
								"status": "COMPLETED",
								"name": "node",
								"conclusion": "NEUTRAL"
							}
						]
					}
				}
			}
		}
	],
	"description": "Test to check"
};
