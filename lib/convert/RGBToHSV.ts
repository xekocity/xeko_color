import bound01 from '../fn/bound01.ts';
import HSV from '../types/HSV.ts';
import RGB from '../types/RGB.ts';
import RGBA from '../types/RGBA.ts';

/**
 * Converts an HSV color value to RGB.
 * @param rgb RGB color
 * @returns The HSV color value
 */
export default function RGBToHSV(rgb: RGB | RGBA): HSV {
	// const r = bound01(rgb.r, 255);
	// const g = bound01(rgb.g, 255);
	// const b = bound01(rgb.b, 255);
	const { r, g, b } = rgb;

	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h = 0;
	var s = 0;
	var v = max;

	var d = max - min;
	s = max === 0 ? 0 : d / max;

	if (max == min) {
		h = 0; // achromatic
	} else {
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}
	return { h: h, s: s, v: v };
}
