'use strict';

const { execSync } = require('child_process');

const getRepo = () => {
	const getRepos = String(execSync('git remote -v'));
	const pushRepoRegex = /(?<=github.com\/)(.*)(?=.git \(push\))/gm;
	return getRepos.match(pushRepoRegex)[0];

};

module.exports = getRepo;
