'use strict';

const path = require('path');
const test = require('tape');

const getSHA = require('../utils/getSHA');

const root = path.join(__dirname, '..');

test('getSHA', (t) => {
	const long = getSHA(root);
	const short = getSHA(root, true);
	t.match(long, /^[a-zA-Z0-9]{40}$/);
	t.match(short, /^[a-zA-Z0-9]{10}$/);
	t.ok(long.startsWith(short), 'short SHA is a prefix of long SHA');

	t.end();
});
