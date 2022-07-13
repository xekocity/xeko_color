/**
 * Force a hex value to have 2 characters
 * @param c
 * @returns
 */
export default function pad2(c: string): string {
	return c.length == 1 ? '0' + c : '' + c;
}
