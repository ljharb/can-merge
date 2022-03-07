'use strict';

const test = require('tape');

const evaluatePullRequest = require('../utils/evaluatePullRequest');
const mockEvalPR = require('./mocks/evalPR');

test('evaluatePullRequest', (t) => {
	mockEvalPR.forEach((mock) => {
		t.equal(
			evaluatePullRequest(mock.pullRequest),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});
