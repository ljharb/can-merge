'use strict';

const test = require('tape');

const evaluatePullRequest = require('../utils/evaluatePullRequest');

const { mockResponses } = require('./mocks');

test('evaluatePullRequest', (t) => {
	t.plan(mockResponses.length);
	mockResponses.forEach((mock) => {
		t.equal(evaluatePullRequest(mock.res.repository.pullRequest, mock.res), mock.expected, mock.description);
	});
	t.end();
});
