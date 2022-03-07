'use strict';

const test = require('tape');

const filterPullRequest = require('../utils/filterPullRequest');
const mockFilterPR = require('./mocks/filterPR.json');

test('filterPullRequest', (t) => {
	mockFilterPR.forEach((mock) => {
		t.deepEqual(
			filterPullRequest(mock.response, mock.argPr),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});

