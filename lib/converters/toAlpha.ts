import Alpha from '../types/Alpha.ts';
import Color from '../types/Color.ts';
import isAlpha from '../validate/isAlpha.ts';
import { map, Result } from '../../deps.ts';
import hexToRGBA from './hexToRGBA.ts';
import isHex4 from '../validate/isHex4.ts';
import isHex8 from '../validate/isHex8.ts';

/**
 * converts a hex string to an alpha value
 * @param color the hex string to convert
 * @returns the alpha value
 */
export default function toAlpha(color: Color): Result<number> {
	if (isAlpha(color)) {
		return (<Alpha> color).a;
	} else if (isHex4(color) || isHex8(color)) {
		return map(toAlpha, hexToRGBA(color));
	} else {
		return new Error('Color does not have an alpha channel');
	}
}
