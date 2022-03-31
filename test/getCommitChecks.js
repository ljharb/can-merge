'use strict';

const test = require('tape');

const { getCommitChecks } = require('../utils/getCommitChecks');
const {
	commitChecks,
	expected,
	description,
} = require('./mocks/getCommitChecks');

test('evaluateCommitStatus', async (t) => {
	t.equal(
		await getCommitChecks(commitChecks, {
			repo: 'repo',
			pr: 1,
			sha: '123abc',
			token: 'token',
		}),
		expected,
		description,
	);

	t.end();
});
