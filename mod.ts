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

import decimalToHex from './lib/convert/decimalToHex.ts';

import hex3ToHex6 from './lib/convert/hex3ToHex6.ts';
import hex3ToRGB from './lib/convert/hex3ToRGB.ts';
import hex4ToHex8 from './lib/convert/hex4ToHex8.ts';
import hex4ToRGBA from './lib/convert/hex4ToRGBA.ts';
import hex6ToHex8 from './lib/convert/hex6ToHex8.ts';
import hex6ToRGB from './lib/convert/hex6ToRGB.ts';
import hex8ToRGBA from './lib/convert/hex8ToRGBA.ts';
import hexStringToHexNumber from './lib/convert/hexStringToHexNumber.ts';
import toHex8String from './lib/convert/toHex8String.ts';
import toHex6String from './lib/convert/toHex6String.ts';
import hexToRGB from './lib/convert/hexToRGB.ts';
import RGBAtoHex8 from './lib/convert/RGBAToHex8.ts';
import RGBAtoRGB from './lib/convert/RGBAToRGB.ts';
import RGBToRGBA from './lib/convert/RGBToRGBA.ts';
import hexToRGBA from './lib/convert/hexToRGBA.ts';
import HSLToRGB from './lib/convert/HSLToRGB.ts';
import HSVToRGB from './lib/convert/HSVToRGB.ts';
import toAlpha from './lib/convert/toAlpha.ts';
import toRGB from './lib/convert/toRGB.ts';
import toRGBA from './lib/convert/toRGBA.ts';

export {
	decimalToHex,
	hex3ToHex6,
	hex3ToRGB,
	hex4ToHex8,
	hex4ToRGBA,
	hex6ToHex8,
	hex6ToRGB,
	hex8ToRGBA,
	hexStringToHexNumber,
	hexToRGB,
	hexToRGBA,
	HSLToRGB,
	HSVToRGB,
	RGBAtoHex8,
	RGBAtoRGB,
	RGBToRGBA,
	toAlpha,
	toHex6String,
	toHex8String,
	toRGB,
	toRGBA,
};
