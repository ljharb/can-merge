'use strict';

const test = require('tape');

const evaluatePullRequest = require('../utils/evaluatePullRequest');
const parsePullRequest = require('../utils/parsePullRequest');
const getRepo = require('../utils/getRepo');
const getSHA = require('../utils/getSHA');

const mockEvalPR = require('./mocks/evalPR');
const mockParsePR = require('./mocks/parsePR.json');

test('evaluatePullRequest', (t) => {
	mockEvalPR.forEach((mock) => {
		t.equal(evaluatePullRequest(mock.res.repository.pullRequest), mock.expected, mock.description);
	});

	t.end();
});

test('parsePullRequest', (t) => {
	mockParsePR.forEach((mock) => {
		t.deepEqual(parsePullRequest(mock.repository), mock.expected, mock.description);
	});

	t.end();
});

test('getRepo', (t) => {
	t.match(getRepo(), /[^/]+\/can-merge/);
	t.looseEqual(getRepo('invalidvalue'), null);

	t.end();
});

test('getSHA', (t) => {
	const long = getSHA();
	const short = getSHA(true);
	t.match(long, /^[a-zA-Z0-9]{40}$/);
	t.match(short, /^[a-zA-Z0-9]{10}$/);
	t.ok(long.startsWith(short), 'short SHA is a prefix of long SHA');

	t.end();
});
