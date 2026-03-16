import test from 'tape';

import evaluatePending from '../utils/evaluatePending.mjs';

test('evaluatePending', (t) => {
	t.test('returns true when pullRequest check is pending', (st) => {
		const response = {
			search: {
				edges: [{
					node: {
						commits: {
							nodes: [{
								commit: {
									statusCheckRollup: { state: 'PENDING' },
								},
							}],
						},
					},
				}],
			},
			repository: {
				commit: {
					statusCheckRollup: { state: 'SUCCESS' },
				},
			},
		};
		st.equal(evaluatePending(response), true);
		st.end();
	});

	t.test('returns true when commit check is pending', (st) => {
		const response = {
			search: {
				edges: [{
					node: {
						commits: {
							nodes: [{
								commit: {
									statusCheckRollup: { state: 'SUCCESS' },
								},
							}],
						},
					},
				}],
			},
			repository: {
				commit: {
					statusCheckRollup: { state: 'PENDING' },
				},
			},
		};
		st.equal(evaluatePending(response), true);
		st.end();
	});

	t.test('returns false when neither check is pending', (st) => {
		const response = {
			search: {
				edges: [{
					node: {
						commits: {
							nodes: [{
								commit: {
									statusCheckRollup: { state: 'SUCCESS' },
								},
							}],
						},
					},
				}],
			},
			repository: {
				commit: {
					statusCheckRollup: { state: 'SUCCESS' },
				},
			},
		};
		st.equal(evaluatePending(response), false);
		st.end();
	});

	t.end();
});
