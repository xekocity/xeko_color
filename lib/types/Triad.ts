import Color from './Color.ts';

export type Triad<T extends Color> = {
	a: T;
	b: T;
	c: T;
};
