'use strict';

const path = require('path');
const test = require('tape');

const getSHA = require('../utils/getSHA');
const resolveIdentifier = require('../utils/resolveIndentifier');

const root = path.join(__dirname, '..');

test('resolveIdentifier', (t) => {
	t.is(getSHA(root), resolveIdentifier('HEAD').trim());
	t.end();
});
