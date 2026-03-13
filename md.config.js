'use strict';

const childProcess = require('child_process');

module.exports = {
	transforms: {
		/* Match <!-- docs CLI_REFERENCE --> */
		CLI_REFERENCE() {
			const result = childProcess.execSync('node ./bin/can-merge.mjs --help', {
				env: { ...process.env, GH_TOKEN: undefined, GITHUB_TOKEN: undefined },
			});
			return [].concat('```txt', '$ npx can-merge --help', String(result), '```').join('\n');
		},
	},
};
