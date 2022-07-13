import Hex from '../types/Hex.ts';
import isHex6 from '../validate/isHex6.ts';
import decimalToHex from './decimalToHex.ts';
import { Result } from '../../deps.ts';

export default function hex6ToHex8(hex: Hex, alpha = 1): Result<string> {
	if (typeof hex === 'string') {
		if (isHex6(hex)) {
			return `${hex}${decimalToHex(alpha)}`;
		}
	}
	if (typeof hex === 'number') {
		return hex6ToHex8(hex.toString(16), alpha);
	}
	return new Error('Invalid color type, cannot convert hex6 to hex8');
}
