import Color from "../types/Color.ts";
import HSL from "../types/HSL.ts";

export default function isHSL(color: Color): color is HSL {
  return ((<HSL> color).l !== undefined) && ((<HSL> color).s !== undefined);
}
