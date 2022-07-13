import decimalToHex from './decimalToHex.ts';
import RGBA from '../types/RGBA.ts';
import hex4Match from '../constants/hex4Match.ts';
import Hex from '../types/Hex.ts';
import { Result } from '../../deps.ts';

export default function hex4ToRGBA(hex: Hex): Result<RGBA> {
	if (typeof hex === 'string') {
		const match = hex4Match.exec(hex);
		if (match === null) {
			return new Error('Invalid hex4 string');
		}
		return {
			r: parseInt(match[1] + '' + match[1], 16),
			g: parseInt(match[2] + '' + match[2], 16),
			b: parseInt(match[3] + '' + match[3], 16),
			a: Number(decimalToHex(match[4] + '' + match[4])),
		};
	} else if (typeof hex === 'number') {
		return hex4ToRGBA(hex.toString(16));
	} else {
		return new Error('Invalid hex4 type');
	}
}
