"use strict";

const pullRequestStatus = require("../../utils/models/pullRequestStatus");
const commitStatus = require("../../utils/models/commitStatus");
const chalk = require("chalk");

/* eslint quotes: ["error", "double"], "quote-props": ["error", "always"], "comma-dangle": ["error", "never"] */

module.exports = [
	{
		"messageStatus": {
			"expected": pullRequestStatus.CLOSED,
			"description": chalk.redBright("⚠ This PR is closed")
		}
	},
	{
		"messageStatus": {
			"expected": pullRequestStatus.CONFLICT,
			"description": chalk.redBright("⚠ There are merge conflicts with the base branch")
		}
	},
	{
		"messageStatus": {
			"expected": pullRequestStatus.MERGEABLE,
			"description": chalk.greenBright("✔ This PR is mergeable")
		}
	},
	{
		"messageStatus": {
			"expected": pullRequestStatus.MERGED,
			"description": chalk.redBright("ℹ This PR is already merged")
		}
	},
	{
		"messageStatus": {
			"expected": pullRequestStatus.REVIEW_APPROVED,
			"description": chalk.greenBright("✔ This PR has been approved")
		}
	},
	{
		"messageStatus": {
			"expected": pullRequestStatus.REVIEW_DISAPPROVED,
			"description": chalk.yellowBright("ℹ There are requested changes on this PR - merging is blocked")
		}
	},
	{
		"messageStatus": {
			"expected": pullRequestStatus.REVIEW_REQUIRED,
			"description": chalk.redBright("ℹ This PR requires a review - merging is blocked")
		}
	},
	{
		"messageStatus": {
			"expected": pullRequestStatus.STATUS_FAILURE,
			"description": chalk.blueBright("⚠ Some status checks are not successful")
		}
	},
	{
		"messageStatus": {
			"expected": pullRequestStatus.STATUSCHECK_PENDING,
			"description": chalk.yellowBright("ℹ Some status checks are pending")
		}
	},
	{
		"messageStatus": {
			"expected": commitStatus.STATUS_PENDING,
			"description": chalk.yellowBright("⌛ Some commit checks are pending")
		}
	},
	{
		"messageStatus": {
			"expected": commitStatus.STATUS_SUCCESS,
			"description": chalk.greenBright("✔ All commit checks are successful")
		}
	},
	{
		"messageStatus": {
			"expected": commitStatus.STATUS_NOT_FOUND,
			"description": chalk.yellowBright("ℹ No commit checks were found")
		}
	}
];
