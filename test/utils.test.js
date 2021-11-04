'use strict';

const test = require('tape');

const evaluatePullRequest = require('../utils/evaluatePullRequest');
const parsePullRequest = require('../utils/parsePullRequest');

const { mockEvalPR, mockParsePR } = require('./mocks');

test('evaluatePullRequest', (t) => {
	t.plan(mockEvalPR.length);
	mockEvalPR.forEach((mock) => {
		t.equal(evaluatePullRequest(mock.res.repository.pullRequest), mock.expected, mock.description);
	});
	t.end();
});

test('parsePullRequest', (t) => {
	t.plan(mockParsePR.length);
	mockParsePR.forEach((mock) => {
		t.deepEqual(parsePullRequest(mock.repository), mock.expected, mock.description);
	});
	t.end();
});
