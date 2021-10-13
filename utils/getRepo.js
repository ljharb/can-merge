'use strict';

const { execSync } = require('child_process');

module.exports = function getRepo() {
	const getRepos = String(execSync('git ls-remote --get-url'));
	const pushRepoRegex = /(?<=github\.com(?:\/|:))(?:.*)(?=\.git*)/gm;
	return getRepos.match(pushRepoRegex)[0];
};
