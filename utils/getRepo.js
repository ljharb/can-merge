'use strict';

const { execSync } = require('child_process');
const isGitRepo = require('git-repo-info');

module.exports = function getRepo(remote = 'origin') {
	if (isGitRepo().sha) {
		const getRepos = String(execSync(`git ls-remote --get-url ${remote}`)).trim();
		const pushRepoRegex = /(?<=github\.com(?:\/|:))(?:.*)(?=\.git*)/gm;
		return getRepos.match(pushRepoRegex)?.[0];
	}
	return null;
};
