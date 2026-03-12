import { createRequire } from 'module';
import test from 'tape';

import parsePullRequest from '../utils/parsePullRequest.mjs';

const require = createRequire(import.meta.url);
const mockParsePR = require('./mocks/parsePR.json');

test('parsePullRequest', (t) => {
	mockParsePR.forEach((mock) => {
		t.deepEqual(
			parsePullRequest(mock.response),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});
