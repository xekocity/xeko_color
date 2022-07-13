import Color from "../types/Color.ts";
import Hex from "../types/Hex.ts";
import hex6Match from "../constants/hex6Match.ts";

export default function isHex6(color: Color): color is Hex {
  if (typeof color === "string") {
    return (hex6Match.exec(color) !== null);
  }
  if (typeof color === "number") {
    return isHex6(color.toString(16));
  }
  return false;
}
