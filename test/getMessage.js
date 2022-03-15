'use strict';


const test = require('tape');

const getMessage = require('../utils/getMessage');

test('getMessage', (t) => {
	mockCommitPR.forEach((mock) => {
		t.equal(
			getMessage(mock.message),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});
