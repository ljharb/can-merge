'use strict';

const childProcess = require('child_process');

module.exports = {
	matchWord: 'MD-MAGIC-EXAMPLE',
	transforms: {
		/* Match <!-- MD-MAGIC-EXAMPLE:START (CLI_REFERENCE) --> */
		CLI_REFERENCE() {
			const result = childProcess.execSync('node ./bin/can-merge --help', {
				env: { ...process.env, GH_TOKEN: undefined, GITHUB_TOKEN: undefined },
			});
			return [].concat('```txt', '$ npx can-merge --help', String(result), '```').join('\n');
		},
	},
	callback() {
		console.log('markdown processing done');
	},
};

