import hex8Match from '../constants/hex8Match.ts';
import Hex from '../types/Hex.ts';
import RGBA from '../types/RGBA.ts';
import decimalToHex from './decimalToHex.ts';
import { Result } from '../../deps.ts';

export default function hex8ToRGBA(hex: Hex): Result<RGBA> {
	if (typeof hex === 'string') {
		const match = hex8Match.exec(hex);
		if (match === null) {
			return new Error('Invalid hex8 string');
		}
		return {
			r: parseInt(match[1], 16),
			g: parseInt(match[2], 16),
			b: parseInt(match[3], 16),
			a: Number(decimalToHex(match[4])),
		};
	} else if (typeof hex === 'number') {
		return hex8ToRGBA(hex.toString(16));
	} else {
		return new Error('Invalid hex8 type');
	}
}
