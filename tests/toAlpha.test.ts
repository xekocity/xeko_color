import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import testdata from './testdata.ts';
import toAlpha from '../lib/convert/toAlpha.ts';

Deno.test('toAlpha test', () => {
	assertEquals(
		toAlpha(testdata.rgba),
		0.5,
	);
});
