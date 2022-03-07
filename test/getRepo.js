'use strict';

const path = require('path');
const test = require('tape');

const getRepo = require('../utils/getRepo');

const root = path.join(__dirname, '..');

test('getRepo', (t) => {
	const repo = getRepo(root);
	t.match(repo, /[^/]+\/can-merge/);
	t.looseEqual(getRepo(root, 'invalidvalue'), null);

	t.end();
});
