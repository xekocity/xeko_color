import RGB from "../types/RGB.ts";
import RGBA from "../types/RGBA.ts";

/**
 * Convert a rgb to rgba.
 * @param rgb
 * @param alpha
 * @returns
 */
export default function RGBToRGBA(rgb: RGB, alpha = 1): RGBA {
  return {
    r: rgb.r,
    g: rgb.g,
    b: rgb.b,
    a: alpha,
  };
}
