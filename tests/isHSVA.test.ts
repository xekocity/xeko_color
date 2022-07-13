import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import testdata from './testdata.ts';
import isHSVA from '../lib/validate/isHSVA.ts';


Deno.test('isAlpha test', () => {
	assertEquals(
		isHSVA(testdata.hsva),
		true,
	);
	assertEquals(
		isHSVA(testdata.rgba),
		false,
	);
});
