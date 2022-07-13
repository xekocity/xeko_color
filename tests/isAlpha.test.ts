import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import isAlpha from '../lib/validate/isAlpha.ts';

Deno.test('isAlpha test', () => {
	assertEquals(
		isAlpha({ r: 1, g: 1, b: 1 }),
		false,
	);
	assertEquals(
		isAlpha({ h: 1, s: 1, v: 1, a: 0.3 }),
		true,
	);
	// assertEquals(
	//   isAlpha('test'), false
	// );
	// assertEquals(
	//   isAlpha('fafafaff'), true
	// );
});
