import Hex from '../types/Hex.ts';
import RGBA from '../types/RGBA.ts';
import hex4ToRGBA from './hex4ToRGBA.ts';
import hex8ToRGBA from './hex8ToRGBA.ts';
import hex3ToRGB from './hex3ToRGB.ts';
import hex6ToRGB from './hex6ToRGB.ts';
import { map, Result } from '../../deps.ts';

export default function hexToRGBA(hex: Hex, alpha = 1): Result<RGBA> {
	return hex4ToRGBA(hex) ||
		hex8ToRGBA(hex) ||
		map((x) => {
			return { ...x, alpha };
		}, hex3ToRGB(hex)) ||
		map((x) => {
			return { ...x, alpha };
		}, hex6ToRGB(hex));
}
