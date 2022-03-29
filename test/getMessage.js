'use strict';

const test = require('tape');

const getMessage = require('../utils/getMessage');
const mockMessage = require('./mocks/evalMessage');

test('getMessage', (t) => {
	mockMessage.forEach((mock) => {
		t.equal(getMessage(mock.messageStatus), mock.expected, mock.description);
	});

	t.end();
});
