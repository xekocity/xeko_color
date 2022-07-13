import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import hex8ToRGBA from '../lib/converters/hex8ToRGBA.ts';
import testdata from './testdata.ts';

Deno.test('toAlpha test', () => {
	const hex8 = hex8ToRGBA(testdata.hexa);
	if (hex8 instanceof Error) {
		console.error(hex8);
		assertEquals(true, false);
	} else {
		assertEquals(hex8.r, testdata.rgb.r);
		assertEquals(hex8.g, testdata.rgb.g);
		assertEquals(hex8.b, testdata.rgb.b);
	}
	// assertEquals(hex8.a, testdata.rgb.a);
});
