import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import test from 'tape';

import getSHA from '../utils/getSHA.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('getSHA', (t) => {
	const long = getSHA(root);
	const short = getSHA(root, true);
	t.match(long, /^[a-zA-Z0-9]{40}$/);
	t.match(short, /^[a-zA-Z0-9]{10}$/);
	t.ok(long.startsWith(short), 'short SHA is a prefix of long SHA');
	t.equal(getSHA('/tmp'), null, 'returns null for a non-git directory');
	t.equal(getSHA('/tmp', true), null, 'returns null for a non-git directory with short flag');

	t.end();
});
