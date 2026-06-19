import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import test from 'tape';

import getRepo from '../utils/getRepo.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('getRepo', (t) => {
	const repo = /** @type {string} */ (getRepo(root));
	t.match(repo, /[^/]+\/can-merge/);
	t.looseEqual(getRepo(root, 'invalidvalue'), null);
	t.equal(getRepo('/tmp'), null, 'returns null for a non-git directory');

	t.end();
});
