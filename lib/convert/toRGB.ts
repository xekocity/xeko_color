import { Result } from '../../deps.ts';
import Color from '../types/Color.ts';
import RGB from '../types/RGB.ts';
import hexToRGB from './hexToRGB.ts';
import isHex from '../validate/isHex.ts';
import isRGB from '../validate/isRGB.ts';
import isRGBA from '../validate/isRGBA.ts';
import RGBAToRGB from './RGBAToRGB.ts';

/**
 * Converts a color to an RGB color.
 */
export default function toRGB(color: Color): Result<RGB> {
	if (isHex(color)) {
		return hexToRGB(color);
	}
	if (isRGB(color)) {
		if (isRGBA(color)) {
			return RGBAToRGB(color);
		}
		return color;
	}
	return new Error('Invalid color type, cannot convert to RGB');
}
