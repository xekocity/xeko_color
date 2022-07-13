import Color from '../types/Color.ts';
import HSLA from '../types/HSLA.ts';
import isHSL from './isHSL.ts';

export default function isHSLA(color: Color): color is HSLA {
	return (((<HSLA> color).a) !== undefined) && isHSL(color);
}
