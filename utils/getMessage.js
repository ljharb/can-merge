'use strict';

const chalk = require('chalk');
const pullRequestStatus = require('./models/pullRequestStatus');

const messages = {
	[pullRequestStatus.CLOSED]: chalk.redBright(pullRequestStatus.CLOSED),
	[pullRequestStatus.CONFLICT]: chalk.redBright(pullRequestStatus.CONFLICT),
	[pullRequestStatus.MERGEABLE]: chalk.greenBright(pullRequestStatus.MERGEABLE),
	[pullRequestStatus.MERGED]: chalk.redBright(pullRequestStatus.MERGED),
	[pullRequestStatus.REVIEW_APPROVED]: chalk.greenBright(pullRequestStatus.REVIEW_APPROVED),
	[pullRequestStatus.REVIEW_DISAPPROVED]: chalk.yellowBright(pullRequestStatus.REVIEW_DISAPPROVED),
	[pullRequestStatus.REVIEW_REQUIRED]: chalk.redBright(pullRequestStatus.REVIEW_REQUIRED),
	[pullRequestStatus.STATUS_FAILURE]: chalk.blueBright(pullRequestStatus.STATUS_FAILURE),
	[pullRequestStatus.STATUS_PENDING]: chalk.yellowBright(pullRequestStatus.STATUS_PENDING),
};

module.exports = function getMessage(response) {
	return messages[response] || messages[pullRequestStatus.MERGEABLE];
};
