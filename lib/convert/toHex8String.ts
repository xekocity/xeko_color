import { map, Result } from '../../deps.ts';
import Color from '../types/Color.ts';
import isHex from '../validate/isHex.ts';
import isHex3 from '../validate/isHex3.ts';
import isHex4 from '../validate/isHex4.ts';
import isHex6 from '../validate/isHex6.ts';
import isHex8 from '../validate/isHex8.ts';
import isRGB from '../validate/isRGB.ts';
import isRGBA from '../validate/isRGBA.ts';
import RGBAtoHex8 from './RGBAToHex8.ts';
import hex3ToHex6 from './hex3ToHex6.ts';
import hex4ToHex8 from './hex4ToHex8.ts';
import hex6ToHex8 from './hex6ToHex8.ts';

export default function toHex8String(color: Color, alpha = 1): Result<string> {
	if (isRGB(color)) {
		if (isRGBA(color)) return RGBAtoHex8(color);
		else return RGBAtoHex8({ ...color, a: alpha });
	}
	if (isHex(color)) {
		if (isHex8(color)) {
			if (typeof color === 'string') return color;
			else if (typeof color === 'number') return color.toString(16);
			else return new Error('Hex is not a string or number');
		}
		if (isHex6(color)) {
			return hex6ToHex8(color, alpha);
		}
		if (isHex3(color)) {
			return map((x) => hex6ToHex8(x, alpha), hex3ToHex6(color));
		}
		if (isHex4(color)) {
			return hex4ToHex8(color);
		}
	}
	return new Error('Invalid color type, cannot convert to hex8');
}
