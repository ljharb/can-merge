'use strict';

const { styleText } = require('util');
const pullRequestStatus = require('./models/pullRequestStatus');
const commitStatus = require('./models/commitStatus');

const messages = {
	[pullRequestStatus.CLOSED]: styleText('redBright', pullRequestStatus.CLOSED),
	[pullRequestStatus.CONFLICT]: styleText('redBright', pullRequestStatus.CONFLICT),
	[pullRequestStatus.MERGEABLE]: styleText('greenBright', pullRequestStatus.MERGEABLE),
	[pullRequestStatus.MERGED]: styleText('redBright', pullRequestStatus.MERGED),
	[pullRequestStatus.REVIEW_APPROVED]: styleText('greenBright', pullRequestStatus.REVIEW_APPROVED),
	[pullRequestStatus.REVIEW_DISAPPROVED]: styleText('yellowBright', pullRequestStatus.REVIEW_DISAPPROVED),
	[pullRequestStatus.REVIEW_REQUIRED]: styleText('redBright', pullRequestStatus.REVIEW_REQUIRED),
	[pullRequestStatus.STATUS_FAILURE]: styleText('blueBright', pullRequestStatus.STATUS_FAILURE),
	[pullRequestStatus.STATUSCHECK_PENDING]: styleText('yellowBright', pullRequestStatus.STATUSCHECK_PENDING),
	[commitStatus.STATUS_FAILURE]: styleText('redBright', commitStatus.STATUS_FAILURE),
	[commitStatus.STATUS_PENDING]: styleText('yellowBright', commitStatus.STATUS_PENDING),
	[commitStatus.STATUS_SUCCESS]: styleText('greenBright', commitStatus.STATUS_SUCCESS),
	[commitStatus.STATUS_NOT_FOUND]: styleText('yellowBright', commitStatus.STATUS_NOT_FOUND),
};

module.exports = function getMessage(response) {
	return messages[response] || messages[pullRequestStatus.MERGEABLE];
};
