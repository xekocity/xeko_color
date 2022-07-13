import Hex from '../types/Hex.ts';
import RGB from '../types/RGB.ts';
import hex3ToRGB from './hex3ToRGB.ts';
import hex4ToRGBA from './hex4ToRGBA.ts';
import hex6ToRGB from './hex6ToRGB.ts';
import hex8ToRGBA from './hex8ToRGBA.ts';
import RGBAToRGB from './RGBAToRGB.ts';
import { map, Result } from '../../deps.ts';

export default function hexToRGB(hex: Hex): Result<RGB> {
	return hex3ToRGB(hex) ||
		hex6ToRGB(hex) ||
		map(RGBAToRGB, hex4ToRGBA(hex)) ||
		map(RGBAToRGB, hex8ToRGBA(hex));
}
