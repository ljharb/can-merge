'use strict';

const test = require('tape');

const watch = require('../utils/watch');
const mockWatchPR = require('./mocks/watchPR.json');

const iter = (iterable) => {
	const it = iterable.values();
	return () => it.next().value;
};

test('watchPR', async (t) => {
	for (const mock of mockWatchPR) {
		const result = await watch(5e3, iter(mock.responses)); // eslint-disable-line no-await-in-loop
		t.equals(
			mock.responses[mock.responses.length - 1],
			result,
			mock.description,
		);
	}
});
