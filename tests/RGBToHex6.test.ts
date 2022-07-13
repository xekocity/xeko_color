import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import testdata from './testdata.ts';
import RGBToHex6 from '../lib/converters/RGBToHex6.ts';

Deno.test('toAlpha test', () => {
	assertEquals(
		RGBToHex6(testdata.rgba),
		testdata.hex,
	);
});
