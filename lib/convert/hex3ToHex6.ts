import { map, Result } from '../../deps.ts';
import Hex from '../types/Hex.ts';
import hex3ToRGB from './hex3ToRGB.ts';
import RGBToHex6 from './RGBToHex6.ts';

export default function hex3ToHex6(hex: Hex): Result<string> {
	return map(RGBToHex6, hex3ToRGB(hex));
}
