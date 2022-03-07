'use strict';

const test = require('tape');

const parseRemoteUrl = require('../utils/parseRemoteUrl');

test('parseRemoteUrl', (t) => {
	const result = 'ljharb/can-merge';
	t.deepEqual(
		parseRemoteUrl('https://github.com/ljharb/can-merge.git'),
		result,
		'parse https url',
	);
	t.deepEqual(
		parseRemoteUrl('http://github.com/ljharb/can-merge.git'),
		result,
		'parse http url',
	);
	t.deepEqual(
		parseRemoteUrl('git@github.com/ljharb/can-merge.git'),
		result,
		'parse git url',
	);
	t.end();
});
