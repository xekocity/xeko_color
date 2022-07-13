import Color from "../types/Color.ts";
import Hex from "../types/Hex.ts";
import hex8Match from "../constants/hex8Match.ts";

export default function isHex8(color: Color): color is Hex {
  if (typeof color === "string") {
    return (hex8Match.exec(color) !== null);
  }
  if (typeof color === "number") {
    return isHex8(color.toString(16));
  }
  return false;
}
