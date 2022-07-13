import pad2 from "../fn/pad2.ts";
import Hex from "../types/Hex.ts";
import RGB from "../types/RGB.ts";

/**
 * Converts a RGB object to a hex string.
 * @param rgb
 * @returns Hex string.
 */
export default function RGBToHex6(rgb: RGB): Hex {
  return `${pad2(Math.round(rgb.r).toString(16))}${
    pad2(Math.round(rgb.g).toString(16))
  }${pad2(Math.round(rgb.b).toString(16))}`;
}
