## xeko_color

A set of functions and types to help wrangle colors in Deno | 🦕

```typescript
const color = toRGBA('#ffffffff');
if (isError(color)) {
	console.error('not rgb', color);
}
console.log(color.r, color.g, color.b);
```
