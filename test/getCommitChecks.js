'use strict';

const test = require('tape');

const { getCommitChecks } = require('../utils/getCommitChecks');
const mock = require('./mocks/getCommitChecks');

test('evaluateCommitStatus', (t) => {
	t.equal(
		getCommitChecks(mock.commitChecks),
		mock.expected,
		mock.description,
	);

	t.end();
});
