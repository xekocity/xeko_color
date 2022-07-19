import HSL from '../types/HSL.ts';
import HSLA from '../types/HSLA.ts';
import RGB from '../types/RGB.ts';

/**
 * @param hsl HSL color
 * @returns
 */
export default function HSLToRGB(hsl: HSL | HSLA): RGB {
	var r, g, b;

	// const h = bound01(hsl.h, 360);
	// const s = bound01(hsl.s, 100);
	// const l = bound01(hsl.l, 100);
	const { h, s, l } = hsl;
	function hue2rgb(p: number, q: number, t: number) {
		if (t < 0) t += 1;
		if (t > 1) t -= 1;
		if (t < 1 / 6) return p + (q - p) * 6 * t;
		if (t < 1 / 2) return q;
		if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		return p;
	}

	if (s === 0) {
		r = g = b = l;
	} else {
		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return { r: r * 255, g: g * 255, b: b * 255 };
}
