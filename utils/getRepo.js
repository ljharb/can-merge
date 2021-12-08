'use strict';

const isGitRepo = require('git-repo-info');
const parse = require('parse-git-config');

module.exports = function getRepo(remote = 'origin') {
	if (isGitRepo().commonGitDir) {
		const config = parse.sync({ path: `${isGitRepo().commonGitDir}/config` });
		const remoteUrl = parse.expandKeys(config)?.remote?.[remote]?.url;
		const pushRepoRegex = /(?<=github\.com(?:\/|:))(?:.*)(?=\.git*)/gm;
		return remoteUrl?.match(pushRepoRegex)?.[0];
	}
	return null;
};
