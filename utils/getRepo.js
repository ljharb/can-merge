'use strict';

const gitRepoInfo = require('git-repo-info');
const parse = require('parse-git-config');
const parseRemoteUrl = require('./parseRemoteUrl');

module.exports = function getRepo(path = process.cwd(), remote = 'origin') {
	const { commonGitDir } = gitRepoInfo(path);
	if (commonGitDir) {
		const config = parse.sync({ path: `${commonGitDir}/config` });
		const url = parse.expandKeys(config)?.remote?.[remote]?.url;
		return parseRemoteUrl(url);
	}
	return null;
};
