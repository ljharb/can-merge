'use strict';

const getRepoInfo = require('git-repo-info');

module.exports = function getSHA(path = process.cwd(), short = false) {
	const { sha, abbreviatedSha } = getRepoInfo(path);
	return sha ? short ? abbreviatedSha : sha : null;
};
