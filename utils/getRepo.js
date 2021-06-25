'use strict';

const fork = require('child_process');

const getRepo = () => fork
	.execSync('git config --get remote.origin.url | grep -Po "(?<=git@github\\.com:)(.*?)(?=.git)"')
	.toString()
	.trim();

module.exports = getRepo;
