import decimalToHex from './decimalToHex.ts';
import pad2 from '../fn/pad2.ts';
import RGBA from '../types/RGBA.ts';

/**
 * Converts a RGBA color to a hexadecimal string.
 * @param rgba
 * @returns Hexadecimal string.
 */
export default function RGBAToHex8(rgba: RGBA): string {
	return `${pad2(Math.round(rgba.r).toString(16))}${
		pad2(Math.round(rgba.g).toString(16))
	}${pad2(Math.round(rgba.b).toString(16))}${
		pad2(decimalToHex(String(rgba.a)))
	}`;
}
