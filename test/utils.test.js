'use strict';

const path = require('path');
const test = require('tape');

const evaluatePullRequest = require('../utils/evaluatePullRequest');
const parsePullRequest = require('../utils/parsePullRequest');
const getRepo = require('../utils/getRepo');
const getSHA = require('../utils/getSHA');
const watch = require('../utils/watch');

const mockEvalPR = require('./mocks/evalPR');
const mockParsePR = require('./mocks/parsePR.json');
const mockWatchPR = require('./mocks/watchPR.json');

const iter = (iterable) => {
	const it = iterable.values();
	return () => it.next().value;
};

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

const root = path.join(__dirname, '..');

test('getRepo', (t) => {
	const repo = getRepo(root);
	t.match(repo, /[^/]+\/can-merge/);
	t.looseEqual(getRepo(root, 'invalidvalue'), null);

	t.end();
});

test('getSHA', (t) => {
	const long = getSHA(root);
	const short = getSHA(root, true);
	t.match(long, /^[a-zA-Z0-9]{40}$/);
	t.match(short, /^[a-zA-Z0-9]{10}$/);
	t.ok(long.startsWith(short), 'short SHA is a prefix of long SHA');

	t.end();
});

test('watchPR', async (t) => {
	for (const mock of mockWatchPR) {
		const result = await watch(5e3, iter(mock.responses)); // eslint-disable-line no-await-in-loop
		t.equals(mock.responses[mock.responses.length - 1], result, mock.description);
	}
});
