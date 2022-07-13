import Color from '../types/Color.ts';
import HSVA from '../types/HSVA.ts';
import isHSV from './isHSV.ts';

export default function isHSVA(color: Color): color is HSVA {
	return (((<HSVA> color).a) !== undefined) && isHSV(color);
}
