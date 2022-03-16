'use strict';

const exec = require('child_process').execSync;

module.exports = (identifier, short = false) => {
	const command = short ? `git show ${identifier} -s --format="%h"` : `git show ${identifier} -s --format="%H"`;
	try {
		return String(exec(command));
	} catch (e) {
		return null;
	}
};
