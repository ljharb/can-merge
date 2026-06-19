import test from 'tape';

import evaluateCommitStatus from '../utils/evaluateCommitStatus.mjs';
import mockCommitPR from './mocks/evalCommit.mjs';

test('evaluateCommitStatus', (t) => {
	mockCommitPR.forEach((mock) => {
		t.equal(
			evaluateCommitStatus(/** @type {any} */ (mock.commitStatus)),
			mock.expected,
			mock.description,
		);
	});

	t.end();
});
