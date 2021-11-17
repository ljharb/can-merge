'use strict';

const { execSync } = require('child_process');

module.exports = function getSHA(short = false) {
	return String(execSync(`git rev-parse${short ? ' --short' : ''} HEAD`)).trim();
};
