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

test('evaluatePRs', { todo: true }, (t) => {
	t.plan(mockResponses.length);
	mockResponses.forEach((mock) => {
		t.error(evaluatePRs(true, mock.res));
		t.error(evaluatePRs(false, mock.res));
	});
	t.end();
});
