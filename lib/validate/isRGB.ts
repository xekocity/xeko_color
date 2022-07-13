import Color from "../types/Color.ts";
import RGB from "../types/RGB.ts";

export default function isRGB(color: Color): color is RGB {
  return ((<RGB> color).r !== undefined) &&
    ((<RGB> color).b !== undefined) &&
    ((<RGB> color).g !== undefined);
}
