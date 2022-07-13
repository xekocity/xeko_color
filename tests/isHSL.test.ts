import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import testdata from './testdata.ts';
import isHSL from '../lib/validate/isHSL.ts'

Deno.test('isAlpha test', () => {
	assertEquals(
		isHSL(testdata.hsl),
		true,
	);
	assertEquals(
		isHSL(testdata.rgba),
		false,
	);
});
