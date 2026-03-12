import { execSync } from 'child_process';

export default (identifier, short = false) => {
	const command = short ? `git show ${identifier} -s --format="%h"` : `git show ${identifier} -s --format="%H"`;
	try {
		return String(execSync(command));
	} catch (e) {
		return null;
	}
};
