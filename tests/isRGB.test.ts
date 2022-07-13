import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import testdata from './testdata.ts';
import isRGB from '../lib/validate/isRGB.ts';

Deno.test('isRGB test', () => {
	assertEquals(
		isRGB(testdata.rgb),
		true,
	);
	// assertEquals(
	// isAlpha('test'),
	// false,
	// );
	// assertEquals(
	// isAlpha('fafafaff'),
	// true,
	// );
});
