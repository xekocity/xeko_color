import { Result } from '../../deps.ts';
import Color from '../types/Color.ts';
import isHex from '../validate/isHex.ts';
import isRGB from '../validate/isRGB.ts';
import isRGBA from '../validate/isRGBA.ts';
import RGBA from '../types/RGBA.ts';
import hexToRGBA from './hexToRGBA.ts';
import RGBToRGBA from './RGBToRGBA.ts';
/**
 * Converts a color to an RGBA color.
 * @param color The color to convert.
 * @param alpha The alpha value to use.
 * @returns RGBA color
 */
export default function toRGBA(color: Color, alpha = 1): Result<RGBA> {
	if (isHex(color)) {
		return hexToRGBA(color, alpha);
	}
	if (isRGB(color)) {
		if (isRGBA(color)) {
			return color;
		}
		return RGBToRGBA(color, alpha);
	}

	return new Error('Invalid color type, cannot convert to RGBA');
}
