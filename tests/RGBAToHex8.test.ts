import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import testdata from './testdata.ts';
import RGBAToHex8 from '../lib/convert/RGBAToHex8.ts';

Deno.test('toAlpha test', () => {
	assertEquals(
		RGBAToHex8(testdata.rgba),
		testdata.hexa,
	);
});
