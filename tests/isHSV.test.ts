import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import testdata from './testdata.ts';
import isHSV from '../lib/validate/isHSV.ts';

Deno.test('isHSV test', () => {
	assertEquals(
		isHSV(testdata.hsv),
		true,
	);
	assertEquals(
		isHSV(testdata.rgba),
		false,
	);
});
