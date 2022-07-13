import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import testdata from './testdata.ts';
import hex6ToRGB from '../lib/convert/hex6ToRGB.ts';

Deno.test('toAlpha test', () => {
	assertEquals(
		hex6ToRGB(testdata.hex),
		testdata.rgb,
	);
});
