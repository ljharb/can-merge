'use strict';

const evaluatePending = require('../utils/evaluatePending');

async function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

module.exports = async function watch(retryDelay, getResponse) {
	const response = await getResponse();

	const { remaining: remAPIPoints, cost: lastReqCost, resetAt } = response.rateLimit;
	const currentTime = new Date();
	const resetTime = new Date(resetAt);
	const milliSecondsLeft = resetTime - currentTime;
	const secondsLeft = Math.ceil(milliSecondsLeft / 1000);

	if ((remAPIPoints < lastReqCost) && (retryDelay < milliSecondsLeft)) {
		process.stderr.write(`API points exhausted. Command will run after ${secondsLeft} seconds\n\n`);
		await delay(milliSecondsLeft);
	}

	const isPendingChecks = evaluatePending(response);

	if (!isPendingChecks) {
		return response;
	}

	setTimeout(() => {
		process.stderr.write('.');
	}, retryDelay);

	return watch(retryDelay, getResponse);
};
