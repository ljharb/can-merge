'use strict';

const path = require('path');
const test = require('tape');

const evaluatePullRequest = require('../utils/evaluatePullRequest');
const filterPullRequest = require('../utils/filterPullRequest');
const parsePullRequest = require('../utils/parsePullRequest');
const getRepo = require('../utils/getRepo');
const getSHA = require('../utils/getSHA');
const watch = require('../utils/watch');

const mockEvalPR = require('./mocks/evalPR');
const mockParsePR = require('./mocks/parsePR.json');
const mockFilterPR = require('./mocks/filterPR.json');
const mockWatchPR = require('./mocks/watchPR.json');
const parseRemoteUrl = require('../utils/parseRemoteUrl');

const iter = (iterable) => {
	const it = iterable.values();
	return () => it.next().value;
};

test('evaluatePullRequest', (t) => {
	mockEvalPR.forEach((mock) => {
		t.equal(evaluatePullRequest(mock.pullRequest), mock.expected, mock.description);
	});

	t.end();
});

test('parsePullRequest', (t) => {
	mockParsePR.forEach((mock) => {
		t.deepEqual(parsePullRequest(mock.response), mock.expected, mock.description);
	});

	t.end();
});

test('parseRemoteUrl', (t) => {
	const result = 'ljharb/can-merge';
	t.deepEqual(parseRemoteUrl('https://github.com/ljharb/can-merge.git'), result, 'parse https url');
	t.deepEqual(parseRemoteUrl('http://github.com/ljharb/can-merge.git'), result, 'parse http url');
	t.deepEqual(parseRemoteUrl('git@github.com/ljharb/can-merge.git'), result, 'parse git url');
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

test('filterPullRequest', (t) => {
	mockFilterPR.forEach((mock) => {
		t.deepEqual(filterPullRequest(mock.response, mock.argPr), mock.expected, mock.description);
	});

	t.end();
});
