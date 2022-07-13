/**
 * return true if the value is a percentage
 * @param n
 * @returns
 */
export default function isPercentage(n: string): boolean {
	return typeof n === 'string' && n.indexOf('%') != -1;
}
