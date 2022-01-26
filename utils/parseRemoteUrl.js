'use strict';

module.exports = function parseRemoteUrl(url) {
	const pushRepoRegex = /github\.com[:/](?<repo>[^/\n]+\/[^/\n]+?)(?:\.git)?$/;
	return url?.match(pushRepoRegex)?.groups.repo;
};
