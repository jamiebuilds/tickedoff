# tickedoff

> Tiny library (<200B gzip) for deferring something by a "tick"

- Using `setTimeout` is actually a bit slow because its clamped to 4ms
- `setImmediate` is not available in most places (and probably never will be)
- `process.nextTick` is only in Node
- `Promise#then` needs polyfills in places
- `tickedoff` uses whatever the best available option is
- There are more robust libraries/polyfills but they are larger in size
- This is all especially good for libraries to use

## Install

```sh
yarn add tickedoff
```

## Usage

```js
const defer = require('tickedoff');

console.log(1);
defer(() => console.log(3));
console.log(2);
// 1
// 2
// 3
```
