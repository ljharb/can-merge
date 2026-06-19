import ljharb from '@ljharb/eslint-config/flat/node/22';

export default [
	...ljharb,
	{
		rules: {
			complexity: 'off',
			'func-style': 'off',
			'id-length': [
				'error', {
					min: 1,
					max: 64,
				},
			],
			'no-extra-parens': 'off',
			'object-curly-newline': 'off',
			'sort-keys': 'off',
		},
	},
	{
		files: ['bin/**'],
		rules: {
			'no-throw-literal': 'off',
		},
	},
];
