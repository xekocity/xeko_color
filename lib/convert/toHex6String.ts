import { map, Result } from '../../deps.ts';
import Color from '../types/Color.ts';
import isHex from '../validate/isHex.ts';
import isHex3 from '../validate/isHex3.ts';
import isHex4 from '../validate/isHex4.ts';
import isHex6 from '../validate/isHex6.ts';
import isHex8 from '../validate/isHex8.ts';
import isRGB from '../validate/isRGB.ts';
import isRGBA from '../validate/isRGBA.ts';
import hex3ToHex6 from './hex3ToHex6.ts';
import hex4ToHex8 from './hex4ToHex8.ts';
import RGBToHex6 from "./RGBToHex6.ts";

export default function toHex6String(color: Color): Result<string> {
	if (isRGB(color)) {
		if (isRGBA(color)) return RGBToHex6(color);
		else return RGBToHex6(color);
	}
	if (isHex(color)) {
		if (isHex8(color)) {
			if (typeof color === 'string') return color;
			else if (typeof color === 'number') return color.toString(16);
			else return new Error('Hex is not a string or number');
		}
		if (isHex6(color)) {
			return color;
		}
		if (isHex3(color)) {
			return hex3ToHex6(color)
		}
		if (isHex4(color)) {
			return hex4ToHex8(color);
		}
	}
	return new Error('Invalid color type, cannot convert to hex8');
}
