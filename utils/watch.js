'use strict';

const evaluatePending = require('../utils/evaluatePending');

module.exports = async function watch(retryDelay, getResponse) {
	const response = await getResponse();

	const isPendingChecks = evaluatePending(response);

	if (!isPendingChecks) {
		return response;
	}

	setTimeout(() => {
		process.stdout.write('.');
	}, retryDelay);

	return watch(retryDelay, getResponse);
};
