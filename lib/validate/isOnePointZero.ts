
export default function isOnePointZero(n: string): boolean {
	return typeof n == 'string' && n.indexOf('.') != -1 && parseFloat(n) === 1;
}
