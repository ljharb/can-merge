import { execSync } from 'child_process';

/**
 * @param {string} identifier
 * @param {boolean} [short]
 */
export default function resolveIdentifier(identifier, short = false) {
	const command = short
		? `git show ${identifier} -s --format="%h"`
		: `git show ${identifier} -s --format="%H"`;
	try {
		return String(execSync(command));
	} catch {
		return null;
	}
}
