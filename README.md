## xeko_color

A set of functions and types to help wrangle colors in Deno | 🦕

Hex to rgb

```typescript
const color = toRGBA('#ffffffff');
if (isError(color)) {
	console.error('not rgb', color);
}
console.log(color.r, color.g, color.b);
```

Rgb to hex

```typescript
const color = toHex({ r: 255, g: 255, b: 255, a: 1 });
if (isError(color)) {
	console.error('not hex', color);
}
console.log(color);
```
