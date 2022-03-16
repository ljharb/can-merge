'use strict';

const util = require('util');
const exec = util.promisify(require('child_process').exec);

// function to resolve the identifier to it's sha
module.exports = async (identifier, short = false) => {
	try {
		const command = short ? `git show ${identifier} -s --format="%h"` : `git show ${identifier} -s --format="%H"`
		const { stdout } = await exec(command);
		return stdout;
	} catch (e) {
		return null;
	}
};
