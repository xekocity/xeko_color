import Hex from './Hex.ts';
import HSL from './HSL.ts';
import HSLA from './HSLA.ts';
import HSV from './HSV.ts';
import HSVA from './HSVA.ts';
import RGB from './RGB.ts';
import RGBA from './RGBA.ts';

type Color = HSL | HSLA | HSV | HSVA | RGB | RGBA | Hex;
export default Color;
