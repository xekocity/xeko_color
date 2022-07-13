import RGBA from '../types/RGBA.ts';
import RGB from '../types/RGB.ts';

export default function RGBAToRGB(rgba: RGBA): RGB {
	return {
		r: rgba.r,
		g: rgba.g,
		b: rgba.b,
	};
}
