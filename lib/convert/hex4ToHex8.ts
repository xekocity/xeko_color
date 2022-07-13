import { map, Result } from '../../deps.ts';
import Hex from '../types/Hex.ts';
import hex4ToRGBA from './hex4ToRGBA.ts';
import RGBAToHex8 from './RGBAToHex8.ts';

export default function hex4ToHex8(hex: Hex): Result<string> {
	return map(RGBAToHex8, hex4ToRGBA(hex));
}
