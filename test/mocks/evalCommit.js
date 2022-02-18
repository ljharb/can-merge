"use strict";

const commitStatus = require("../../utils/models/commitStatus");

/* eslint quotes: ["error", "double"], "quote-props": ["error", "always"], "comma-dangle": ["error", "never"] */

module.exports = [
	{
		"commitStatus": {
			"statusCheckRollup": {
				"state": "SUCCESS",
				"contexts": {
					"totalCount": 90,
					"pageInfo": { "endCursor": "OTA", "hasNextPage": false },
					"nodes": [
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "Automatic Rebase",
							"conclusion": "SUCCESS"
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
							"name": "tests / matrix",
							"conclusion": "SUCCESS"
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
							"name": "tests / pretest",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / pretest",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (17.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (17.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / posttest",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / posttest",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (16.13)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (16.13)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (14.19)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (14.19)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.12)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.12)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.11)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.11)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.10)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.10)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.9)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.9)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.8)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.8)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.7)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.7)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.18)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.18)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.17)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.17)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.16)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.16)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.15)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.15)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.14)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.14)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.13)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.13)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.12)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.12)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.11)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.11)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.10)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.10)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.9)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.9)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.8)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.8)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.7)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.7)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / node minors @ ^14 || >= 16",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / node minors @ ^14 || >= 16",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "node",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "node",
							"conclusion": "SUCCESS"
						}
					]
				}
			}
		},
		"expected": commitStatus.STATUS_SUCCESS,
		"description": "✔ All commit checks are successful"
	},
	{
		"commitStatus": {
			"statusCheckRollup": {
				"state": "PENDING",
				"contexts": {
					"totalCount": 34,
					"pageInfo": {
						"endCursor": "MzQ",
						"hasNextPage": false
					},
					"nodes": [
						{
							"__typename": "StatusContext",
							"state": "PENDING",
							"context": "ci/circleci: sync_reconciler_forks",
							"description": "CircleCI is running your tests"
						},
						{
							"__typename": "StatusContext",
							"state": "PENDING",
							"context":
								"ci/circleci: yarn_test--r=www-classic --env=development --variant=true",
							"description": "CircleCI is running your tests"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "Facebook CLA Check",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: RELEASE_CHANNEL_stable_yarn_build",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: RELEASE_CHANNEL_stable_yarn_test_dom_fixtures",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: build_devtools_and_process_artifacts",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: build_devtools_scheduling_profiler",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: get_base_build",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: process_artifacts_combined",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: setup",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: sizebot",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: yarn_build",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: yarn_build_combined",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: yarn_flow",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: yarn_lint",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: yarn_lint_build",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=experimental --env=development",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=experimental --env=production",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: yarn_test--r=stable --env=development",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=stable --env=development --persistent",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/circleci: yarn_test--r=stable --env=production",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=www-classic --env=development --variant=false",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=www-classic --env=production --variant=false",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=www-classic --env=production --variant=true",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=www-modern --env=development --variant=false",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=www-modern --env=development --variant=true",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=www-modern --env=production --variant=false",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test--r=www-modern --env=production --variant=true",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test_build---project=devtools -r=experimental",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test_build--r=experimental --env=development",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test_build--r=experimental --env=production",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test_build--r=stable --env=development",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context":
								"ci/circleci: yarn_test_build--r=stable --env=production",
							"description": "Your tests passed on CircleCI!"
						},
						{
							"__typename": "StatusContext",
							"state": "SUCCESS",
							"context": "ci/codesandbox",
							"description": "Building packages succeeded."
						}
					]
				}
			}
		},
		"expected": commitStatus.STATUS_PENDING,
		"description": "⌛ Some commit checks are pending"
	},
	{
		"commitStatus": {
			"statusCheckRollup": {
				"state": "FAILURE",
				"contexts": {
					"totalCount": 48,
					"pageInfo": { "endCursor": "NDg", "hasNextPage": false },
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
							"name": "tests / matrix",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / pretest",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (17.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / posttest",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (16.14)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (14.19)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.13)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.12)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.11)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.10)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.9)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.8)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.7)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.18)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.17)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.16)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.15)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.14)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.13)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.12)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.11)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.10)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.9)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.8)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.7)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / node minors @ ^14 || >= 16",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "node",
							"conclusion": "SUCCESS"
						}
					]
				}
			}
		},
		"expected": commitStatus.STATUS_FAILURE,
		"description": "⚠ Some commit checks were not successful"
	},
	{
		"commitStatus": {
			"statusCheckRollup": {
				"state": "ERROR",
				"contexts": {
					"totalCount": 49,
					"pageInfo": { "endCursor": "NDk", "hasNextPage": false },
					"nodes": [
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "Automatic Rebase",
							"conclusion": "ERROR"
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
							"name": "tests / matrix",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / pretest",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (17.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / posttest",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (16.14)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / latest minors (14.19)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (17.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.13)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.12)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.11)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.10)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.9)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.8)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.7)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (16.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.18)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.17)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.16)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.15)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.14)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.13)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.12)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.11)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.10)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.9)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.8)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.7)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.6)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.5)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.4)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.3)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.2)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.1)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / non-latest minors (14.0)",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "tests / node minors @ ^14 || >= 16",
							"conclusion": "SUCCESS"
						},
						{
							"__typename": "CheckRun",
							"status": "COMPLETED",
							"name": "node",
							"conclusion": "SUCCESS"
						}
					]
				}
			}
		},
		"expected": commitStatus.STATUS_FAILURE,
		"description": "⚠ Some commit checks were not successful"
	},
	{
		"commitStatus": {
			"statusCheckRollup": {
				"state": "NULL"
			}
		},
		"expected": commitStatus.STATUS_NOT_FOUND,
		"description": "ℹ No commit checks were found"
	}
];
