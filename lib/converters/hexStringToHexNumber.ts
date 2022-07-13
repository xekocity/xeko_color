import { Result } from "../../deps.ts";

/**
 * convert a hex string to a hex number
 * @param hexString the hex string to convert 
 * @returns the hex number
 */
export default function hexStringHexNumber(hexString: string): Result<number> {
    const hexNumber = parseInt(hexString, 16);
    if (isNaN(hexNumber)) {
        return new Error(`Invalid hex string: ${hexString}`);
    }
    return hexNumber;
}