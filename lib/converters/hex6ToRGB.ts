import RGB from '../types/RGB.ts';
import Hex from '../types/Hex.ts';
import hex6Match from '../constants/hex6Match.ts';
import { Result } from '../../deps.ts';

export default function hex6ToRGB(hex: Hex): Result<RGB> {
	if (typeof hex === 'string') {
		const match = hex6Match.exec(hex);
		if (match === null) {
			return new Error('Invalid hex6 string');
		}
		return {
			r: parseInt(match[1], 16),
			g: parseInt(match[2], 16),
			b: parseInt(match[3], 16),
		};
	} else if (typeof hex === 'number') {
		return hex6ToRGB(hex.toString(16));
	} else {
		return new Error('Invalid hex6 type');
	}
}
