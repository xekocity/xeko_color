/**
 *  Converts a decimal [0-1] to a hex value
 * @param d decimal value
 * @returns
 */
export default function decimalToHex(d: string | number): string {
	if (typeof d === 'string') {
		return Math.round(parseFloat(d) * 255).toString(16);
	} else {
		return Math.round(d * 255).toString(16);
	}
}
