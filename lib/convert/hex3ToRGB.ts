import RGB from '../types/RGB.ts';
import Hex from '../types/Hex.ts';
import hex3Match from '../constants/hex3Match.ts';
import { Result } from '../../deps.ts';

export default function hex3ToRGB(hex: Hex): Result<RGB> {
	if (typeof hex === 'string') {
		const match = hex3Match.exec(hex);
		if (match === null) {
			return new Error('Invalid hex3 string');
		}
		return {
			r: parseInt(match[1] + '' + match[1], 16),
			g: parseInt(match[2] + '' + match[2], 16),
			b: parseInt(match[3] + '' + match[3], 16),
		};
	} else if (typeof hex === 'number') {
		return hex3ToRGB(hex.toString(16));
	} else {
		return new Error('Invalid hex3 type');
	}
}
