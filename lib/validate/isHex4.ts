import Color from "../types/Color.ts";
import Hex from "../types/Hex.ts";
import hex4Match from "../constants/hex4Match.ts";

export default function isHex4(color: Color): color is Hex {
  if (typeof color === "string") {
    return (hex4Match.exec(color) !== null);
  }
  if (typeof color === "number") {
    return isHex4(color.toString(16));
  }
  return false;
}
