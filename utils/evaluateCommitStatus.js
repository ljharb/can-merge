'use strict';

const commitStatus = require('./models/commitStatus');

const success = (commit) => commit?.statusCheckRollup?.state === 'SUCCESS';
const failure = (commit) => commit?.statusCheckRollup?.state === 'ERROR' || commit?.statusCheckRollup?.state === 'FAILURE';
const pending = (commit) => commit?.statusCheckRollup?.state === 'PENDING';

module.exports = function evaluateCommitStatus(commit) {
	if (success(commit)) {
		return commitStatus.STATUS_SUCCESS;
	}
	if (failure(commit)) {
		return commitStatus.STATUS_FAILURE;
	}
	if (pending(commit)) {
		return commitStatus.STATUS_PENDING;
	}
	return commitStatus.STATUS_NOT_FOUND;
};
