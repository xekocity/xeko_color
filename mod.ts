import * as convert from './lib/convert/mod.ts';
import * as validate from './lib/validate/mod.ts';
import Alpha from './lib/types/Alpha.ts';
import Color from './lib/types/Color.ts';
import Hex4 from './lib/types/Hex.ts';
import HSL from './lib/types/HSL.ts';
import HSLA from './lib/types/HSLA.ts';
import HSV from './lib/types/HSV.ts';
import HSVA from './lib/types/HSVA.ts';
import RGB from './lib/types/RGB.ts';
import RGBA from './lib/types/RGBA.ts';
import Triad from './lib/types/Triad.ts';

export type { Alpha, Color, Hex4, HSL, HSLA, HSV, HSVA, RGB, RGBA, Triad };

export { convert, validate };
