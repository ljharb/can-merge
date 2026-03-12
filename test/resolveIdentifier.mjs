import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import test from 'tape';

import getSHA from '../utils/getSHA.mjs';
import resolveIdentifier from '../utils/resolveIndentifier.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('resolveIdentifier', (t) => {
	t.is(getSHA(root), resolveIdentifier('HEAD').trim());
	t.end();
});
