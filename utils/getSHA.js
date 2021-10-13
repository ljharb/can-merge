'use strict';

const { execSync } = require('child_process');

module.exports = function getSHA() {
	return String(execSync('git rev-parse --short HEAD')).trim();
};
