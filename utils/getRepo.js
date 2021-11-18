'use strict';

const { execSync } = require('child_process');
const isGitRepo = require('git-repo-info');

module.exports = function getRepo() {
	if (isGitRepo().sha) {
		const getRepos = String(execSync('git ls-remote --get-url'));
		const pushRepoRegex = /(?<=github\.com(?:\/|:))(?:.*)(?=\.git*)/gm;
		return getRepos.match(pushRepoRegex)?.[0];
	}
	return null;
};
