import test from 'tape';

import evaluateChecks from '../utils/evaluateChecks.mjs';

test('evaluateChecks', (t) => {
	t.test('returns empty arrays when all CheckRun conclusions are SUCCESS', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'CheckRun',
										status: 'COMPLETED',
										name: 'build',
										conclusion: 'SUCCESS',
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr);
		st.deepEqual(result, { failure: [], pending: [] });
		st.end();
	});

	t.test('parses CheckRun failures when a CheckRun has non-SUCCESS conclusion', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'CheckRun',
										status: 'COMPLETED',
										name: 'build',
										conclusion: 'FAILURE',
										isRequired: true,
									},
									{
										__typename: 'CheckRun',
										status: 'IN_PROGRESS',
										name: 'deploy',
										conclusion: null,
										isRequired: false,
									},
									{
										__typename: 'CheckRun',
										status: 'COMPLETED',
										name: 'lint',
										conclusion: 'SUCCESS',
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr);
		st.deepEqual(result.failure, [{ name: 'build', isRequired: true }]);
		st.deepEqual(result.pending, [{ name: 'deploy', isRequired: false }]);
		st.end();
	});

	t.test('uses requiredChecks list when provided for CheckRuns', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'CheckRun',
										status: 'COMPLETED',
										name: 'build',
										conclusion: 'FAILURE',
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr, ['build']);
		st.deepEqual(result.failure, [{ name: 'build', isRequired: true }]);
		st.end();
	});

	t.test('returns empty arrays when statusCheckRollup is null', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: null,
					},
				}],
			},
		};

		const result = evaluateChecks(pr);
		st.deepEqual(result, { failure: [], pending: [] });
		st.end();
	});

	t.test('uses requiredChecks list when provided for StatusContext', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'StatusContext',
										state: 'FAILURE',
										context: 'ci/test',
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr, ['ci/test']);
		st.deepEqual(result.failure, [{ name: 'ci/test', isRequired: true }]);
		st.end();
	});

	t.test('handles StatusContext PENDING with requiredChecks', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'StatusContext',
										state: 'PENDING',
										context: 'ci/test',
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr, ['ci/test']);
		st.deepEqual(result.pending, [{ name: 'ci/test', isRequired: true }]);
		st.end();
	});

	t.test('handles pending CheckRun without requiredChecks falling back to isRequired', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'CheckRun',
										status: 'IN_PROGRESS',
										name: 'deploy',
										conclusion: null,
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr);
		st.deepEqual(result.pending, [{ name: 'deploy', isRequired: false }]);
		st.end();
	});

	t.test('handles pending CheckRun with requiredChecks matching', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'CheckRun',
										status: 'IN_PROGRESS',
										name: 'deploy',
										conclusion: null,
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr, ['deploy']);
		st.deepEqual(result.pending, [{ name: 'deploy', isRequired: true }]);
		st.end();
	});

	t.test('handles pending CheckRun with requiredChecks not matching', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'CheckRun',
										status: 'IN_PROGRESS',
										name: 'deploy',
										conclusion: null,
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr, ['other-check']);
		st.deepEqual(result.pending, [{ name: 'deploy', isRequired: false }]);
		st.end();
	});

	t.test('handles CheckRun failure with requiredChecks not matching', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'CheckRun',
										status: 'COMPLETED',
										name: 'build',
										conclusion: 'FAILURE',
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr, ['other-check']);
		st.deepEqual(result.failure, [{ name: 'build', isRequired: false }]);
		st.end();
	});

	t.test('handles StatusContext ERROR state', (st) => {
		const pr = {
			commits: {
				nodes: [{
					commit: {
						statusCheckRollup: {
							contexts: {
								nodes: [
									{
										__typename: 'StatusContext',
										state: 'ERROR',
										context: 'ci/test',
										isRequired: true,
									},
								],
							},
						},
					},
				}],
			},
		};

		const result = evaluateChecks(pr);
		st.deepEqual(result.failure, [{ name: 'ci/test', isRequired: true }]);
		st.end();
	});

	t.end();
});
