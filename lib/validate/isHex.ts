import Color from "../types/Color.ts";
import Hex from "../types/Hex.ts";
import isHex3 from "./isHex3.ts";
import isHex4 from "./isHex4.ts";
import isHex6 from "./isHex6.ts";
import isHex8 from "./isHex8.ts";

export default function isHex(color: Color): color is Hex {
  return isHex6(color) || isHex8(color) || isHex3(color) || isHex4(color);
}
