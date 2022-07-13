import Color from '../types/Color.ts';
import HSV from '../types/HSV.ts';

export default function isHSV(color: Color): color is HSV {
	return ((<HSV> color).v !== undefined);
}
