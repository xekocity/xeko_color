import HSV from '../types/HSV.ts';
import HSVA from '../types/HSVA.ts';
import RGB from '../types/RGB.ts';

/**
 * Converts an HSV color value to RGB.
 * @param hsv The HSV color value
 * @returns The RGB color value
 */
export default function HSVToRGB(hsv: HSV | HSVA): RGB {
	const h = hsv.h * 6;
	const s = hsv.s;
	const v = hsv.v;

	var i = Math.floor(h);
	var f = h - i;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);
	var mod = i % 6;
	var r = [v, q, p, p, t, v][mod];
	var g = [t, v, v, q, p, p][mod];
	var b = [p, p, t, v, v, q][mod];

	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255),
	};
}
