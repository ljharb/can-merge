'use strict';

const test = require('tape');

const evaluateCommitStatus = require('../utils/evaluateCommitStatus');
const mockCommitPR = require('./mocks/evalCommit');

test('evaluateCommitStatus', (t) => {
	mockCommitPR.forEach((mock) => {
		t.equal(
			evaluateCommitStatus(mock.commitStatus),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});
