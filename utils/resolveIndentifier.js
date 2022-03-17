'use strict';

const util = require('util');
const exec = require('child_process').execSync;

// function to resolve the identifier to it's sha
module.exports = (identifier, short = false) => {
	try {
		const command = short ? `git show ${identifier} -s --format="%h"` : `git show ${identifier} -s --format="%H"`;
		const  stdout  = exec(command).toString();
		return stdout;
	} catch (e) {
		return null;
	}
};
