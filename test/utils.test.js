'use strict';

const test = require('tape');

const evaluatePullRequest = require('../utils/evaluatePullRequest');
const evaluatePRs = require('../utils/evaluatePRs');

const { mockResponses } = require('./mocks');

test('evaluatePullRequest', (t) => {
	t.plan(mockResponses.length);
	mockResponses.forEach((mock) => {
		const PRs = [].concat(
			mock.res.repository.pullRequest || [],
			mock.res.repository.pullRequests?.nodes || [],
		);
		t.test(`mock: ${mock.description}:`, { skip: PRs.length === 0 }, (st) => {
			st.plan(PRs.length);
			PRs.forEach((pr) => {
				st.equal(evaluatePullRequest(pr, mock.res), mock.expected, mock.description);
			});
		});
	});
	t.end();
});

test('evaluatePRs', { skip: true }, (t) => {
	t.plan(mockResponses.length * 2);
	mockResponses.forEach((mock) => {
		t.equal(evaluatePRs(true, mock.res), true);
		t.equal(evaluatePRs(false, mock.res), false);
	});
});
