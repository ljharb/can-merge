import test from 'tape';

import evaluatePullRequest from '../utils/evaluatePullRequest.mjs';
import mockEvalPR from './mocks/evalPR.mjs';

test('evaluatePullRequest', (t) => {
	mockEvalPR.forEach((mock) => {
		t.equal(
			evaluatePullRequest(/** @type {any} */ (mock.pullRequest)),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});
