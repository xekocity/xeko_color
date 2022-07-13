import Color from './Color.ts';

type Triad<T extends Color> = {
	a: T;
	b: T;
	c: T;
};

export default Triad;
