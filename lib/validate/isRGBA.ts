import Color from '../types/Color.ts';
import RGBA from '../types/RGBA.ts';
import isRGB from './isRGB.ts';

export default function isRGBA(color: Color): color is RGBA {
	return (((<RGBA> color).a) !== undefined) && isRGB(color);
}
