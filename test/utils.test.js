'use strict';

const test = require('tape');

const evaluatePullRequest = require('../utils/evaluatePullRequest');

const mockResponses = require('./mocks.json');

test('evaluatePullRequest', (t) => {
	t.plan(mockResponses.length);
	mockResponses.forEach((mock) => {
		t.equal(evaluatePullRequest(mock.res), mock.expected, mock.description);
	});
	t.end();
});
