'use strict';

const gitRepoInfo = require('git-repo-info');
const parse = require('parse-git-config');

module.exports = function getRepo(path = process.cwd(), remote = 'origin') {
	const { commonGitDir } = gitRepoInfo(path);
	if (commonGitDir) {
		const config = parse.sync({ path: `${commonGitDir}/config` });
		const remoteUrl = parse.expandKeys(config)?.remote?.[remote]?.url;
		const pushRepoRegex = /github\.com[:/](?<repo>[^/\n]+\/[^/\n]+?)(?:\.git)?$/;
		return remoteUrl?.match(pushRepoRegex)?.groups.repo;
	}
	return null;
};
