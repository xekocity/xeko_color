import Alpha from '../types/Alpha.ts';
import Color from '../types/Color.ts';
import isHex4 from './isHex4.ts';
import isHex8 from './isHex8.ts';

/**
 * @param color
 * @returns
 */
export default function isAlpha(color: Color): boolean {
	if ((<Alpha> color).a !== undefined) {
		return true;
	} else if (isHex4(color) || isHex8(color)) {
		return true;
	}
	return false;
}
