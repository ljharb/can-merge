import { createRequire } from 'module';
import test from 'tape';

import filterPullRequest from '../utils/filterPullRequest.mjs';

const requireJSON = createRequire(import.meta.url);
/** @type {any[]} */
const mockFilterPR = requireJSON('./mocks/filterPR.json');

test('filterPullRequest', (t) => {
	mockFilterPR.forEach((mock) => {
		t.deepEqual(
			filterPullRequest(mock.response, mock.argPr),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});
