import Color from "../types/Color.ts";
import Hex from "../types/Hex.ts";
import hex3Match from "../constants/hex3Match.ts";

export default function isHex3(color: Color): color is Hex {
  if (typeof color === "string") {
    return (hex3Match.exec(color) !== null);
  }
  if (typeof color === "number") {
    return isHex3(color.toString(16));
  }
  return false;
}
