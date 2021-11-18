'use strict';

const getRepoInfo = require('git-repo-info');

module.exports = function getSHA(short = false) {
	const { sha, abbreviatedSha } = getRepoInfo();
	return sha ? short ? abbreviatedSha : sha : null;
};
