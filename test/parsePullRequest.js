'use strict';

const test = require('tape');

const parsePullRequest = require('../utils/parsePullRequest');
const mockParsePR = require('./mocks/parsePR.json');

test('parsePullRequest', (t) => {
	mockParsePR.forEach((mock) => {
		t.deepEqual(
			parsePullRequest(mock.response),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});
