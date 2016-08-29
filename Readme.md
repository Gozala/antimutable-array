# antimutable-array
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

This library provides a set of functions that can be used as an alternative to
[built-in array methods][array methods] and provide following value proposition:

1. Passed array is never mutated.
2. If operation is [noop][] passed array is returned instead of copy.
3. Library will do as little allocations as possible. (For example in majority of case where result is empty array same frozen empty array is returned).
4. Library is fully [flow][] typed.
5. Functions have a more composable interface.

## Usage

Functions are grouped by built-in array methods that they provide alternative for. Examples presume following in the scope:

```js
import AntimutableArray from 'antimutable-array'
```


### [`Array.prototype.push`][]

#### `push <value> (item:value, items:Array<value>) => Array<value>`

Similar to [`Array.prototype.push`][] but instead of mutating array in place and returning a new length, returns new array with given element added to the end of the passed array.

```js
AntimutableArray.push(5, [1, 2, 3]) // => [1, 2, 3, 5]
```

### [`Array.prototype.reverse`][]

#### `reverse <value> (items:Array<value>) => Array<value>`

Same as [`Array.prototype.reverse`][] but instead of mutating array in place returns new array with it's elements in reversed order.

```js
AntimutableArray.reverse([1, 2, 3]) // => [3, 2, 1]
```

### [`Array.prototype.shift`][]

Built-in [`Array.prototype.shift`][] does multiple things:

1. Gets you an array with first element removed (by mutating given array).
2. Gets you the first element of the array, if available (as return value).

Usually you would need either first element or rest elements of the array and
this library provides:

#### `drop <value> (n:number, items:Array<value>) => Array<value>`

Returns you array containing all but the first `n` elements of the given array.

```js
AntimutableArray.drop(2, [1, 2, 3, 4]) // => [3, 4]
AntimutableArray.drop(4, [1, 2, 3, 4]) // => []
```

It can be used in place of [`Array.prototype.shift`][] when you need to get an array without it's first element as simply as:

```js
AntimutableArray.drop(1, [2, 3, 4]) // => [2, 3, 4]
```

#### `first <value> (items:Array<value>) => ?value`

Return first element of the array unless array is empty, in later case void is returned. This can be used in place of [`Array.prototype.shift`][] when you need return value of it. Or in place of `array[0]`.

```js
AntimutableArray.first([1, 2, 3, 4]) // => 1
AntimutableArray.first([4]) // => 4
AntimutableArray.first([]) == null // => true
```

#### `const [first, ...rest] = array`

In some cases you need both return value of the [`Array.prototype.shift`][] and a mutated array (that no longer contains first element). In those cases use of destructuring syntax is the best immutable alternative:

```js
const [first, ...rest] = [1, 2, 3, 4]
first // => 1
rest // => [2, 3, 4]
```


### [`Array.prototype.sort`][]

Instead of function with optional argument library provides two functions

#### `sort <value> (items:Array<value>) => Array<value>`

Returns an array with elements of the given array sorted in order of string unicode code points *(same order as `array.sort()`)*.

```js
AntimutableArray.sort([1, 5, 0, 9, 7]) // => [0, 1, 5, 7, 9]
```

#### `sortBy = <v> (f:(a:v, b:v) => number, items:Array<v>) => Array<v>`

Returns an array with elements of the given array sorted via give compare function (compare function has same API as in [`Array.prototype.sort`][]).

```js
const descending =
  (a, b) =>
  a > b
  ? -1
  : a < b
  ? 1
  : 0

AntimutableArray.sortBy(descending, [1, 5, 0, 9, 7]) // => [9, 7, 5, 1, 0]
```

### [`Array.prototype.splice`][]

Built-in [`Array.prototype.splice`][] can do multiple things:

1. Give you an array with some items removed.
2. Give you an array with some items inserted.
3. Give you an array with some items removed & some inserted.

Usually you do need to either insert or remove elements from the array, more rarely you need to do both at the same time. This library covers individual use case with a separate function with designated interface.

#### `remove <v> (index:number, n:number, items:Array<v>) => Array<v>`

Returns array with `n` number of elements removed from the given array starting from given `index`.

```js
AntimutableArray.remove(1, 1, [1, 2, 3, 4, 5]) // => [ 1, 3, 4, 5 ]
AntimutableArray.remove(1, 3, [1, 2, 3, 4, 5]) // => [ 1, 5 ]
```

When `n` is negative that number of elements preceding the `index` are excluded instead.

```js
AntimutableArray.remove(3, -2, [1, 2, 3, 4, 5]) // => [1, 4, 5]
AntimutableArray.remove(5, -3, [1, 2, 3, 4, 5]) // => [1, 2]
```


If `index` is out of bounds *(less than 0 or greater than number of elemnet in array)* then only elements with in the array bounds are removed if such elements exist:

```js
AntimutableArray.remove(-3, 5, [1, 2, 3, 4, 5]) // => [3, 4, 5]
AntimutableArray.remove(7, -5, [1, 2, 3, 4, 5]) // => [1, 2]
AntimutableArray.remove(7, -2, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 5]
AntimutableArray.remove(-4, 2, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 5]
AntimutableArray.remove(-4, -2, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 5]
```

#### `insert <v> (index:number, include:Array<v>, items:Array<v>) => Array<v>`

Returns array with elements of given `include` array included in the given `items` array at the given `index` offset.

```js
AntimutableArray.insert(1, [0, 7], [1, 2, 3, 4]) // => [1, 0, 7, 2, 3, 4]
AntimutableArray.insert(3, [0, 7], [1, 2, 3, 4]) // => [1, 2, 3, 0, 7, 4]
```

If passed `index` is negative it is treated as index from the end of the array instead:

```js
AntimutableArray.insert(-1, [0, 7], [1, 2, 3, 4]) // => [1, 2, 3, 0, 7, 4]
AntimutableArray.insert(-7, [0, 7], [1, 2, 3, 4]) // => [0, 7, 1, 2, 3, 4]
```


#### `substitute <v> (index:number, n:number, add:Array<v>, src:Array<v>) => Array<v>`

If you need to do both exclude and include items in one step then there is this function that behaves pretty much same as [`Array.prototype.splice`][] but without mutating passed array (name is intentionally different due to slight API differences).

```js
AntimutableArray.substitute(2, 3, [0, 7], [1, 2, 3, 4, 5, 6]) // => [1, 2, 0, 7, 6]
AntimutableArray.substitute(-3, 2, [8, 8], [1, 2, 3, 4, 5]) // => [1, 2, 8, 8, 5]
```

### [`Array.prototype.unshift`][]

#### `unshift <value> (item:value, items:Array<value>):Array<value>`

Returns array with given `item` as first element followed by elements of given `items` array.

```js
AntimutableArray.unshift(0, [1, 2, 3]) // => [0, 1, 2, 3]
```

### [`Array.prototype.concat`][]

Built-in [`Array.prototype.concat`][] is variadic and also somewhat error prone due to treating non array arguments as array of only that argument. Instead library provides two different functions.

#### `append <value> (left:Array<value>, right:Array<value>) => Array<value>`

Returns new array with elements of given `left` array followed by elements of the given `right` array:

```js
AntimutableArray.append([0, 1], [7, 8, 9]) // => [0, 1, 7, 8, 9]
```

#### `concat <value> (arrays:Array<Array<value>>) => Array<value>`

Returns array that represents concatenation of the elements in the supplied `arrays`.

```js
AntimutableArray.concat([[1, 2], [3], [], [4, 5]]) // => 1, 2, 3, 4, 5
```

### `Array.prototype.slice`

#### `drop <value> (n:number, items:Array<value>) => Array<value>`

Returns an array containing all but the first `n` elements from the supplied `items` array.

```js
AntimutableArray.drop(2, [1, 2, 3, 4, 5]) // => [3, 4, 5]
AntimutableArray.drop(0, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 5]
AntimutableArray.drop(9, [1, 2, 3, 4, 5]) // => []
```

#### `take <value> (n:number, items:Array<value>) => Array<value>`

Returns an array of the first `n` elements from the supplied `items` array, or all items if there are fewer than `n`.

```js
AntimutableArray.take(2, [1, 2, 3, 4, 5]) // => [1, 2]
AntimutableArray.take(0, [1, 2, 3, 4, 5]) // => []
AntimutableArray.take(9, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 5]
```

#### `slice <v> (start:number, end:number, items:Array<v>) => Array<v>`

Returns an array containing elements starting from `start` index to `end` index from the supplied `items` array:

```js
AntimutableArray.slice(0, 2, [1, 2, 3, 4, 5]) // => [1, 2]
AntimutableArray.slice(2, 4, [1, 2, 3, 4, 5]) // => [3, 4]
```

Negative `start` and `end` indexes are resolved from the end of the supplied `items` array.

```js
AntimutableArray.slice(-4, 4, [1, 2, 3, 4, 5]) // => [2, 3, 4]
AntimutableArray.slice(-5, -2, [1, 2, 3, 4, 5]) // => [1, 2, 3]
```
### `array[2] = 3`

#### `set <v> (index:number, item:v, items:Array<v>) => Array<v>`

Returns a new array with elements of the supplied `items` array, but with an element at given `index` replaced with given `item` element.

```js
AntimutableArray.set(2, 0, [1, 2, 3, 4, 5]) // => [1, 2, 0, 4, 5]
```

If `index` is negative it is resolved from the rear of the array *(Which provides arguably nicer interface to `array[array.length - 1] = 2`)*.

```js
AntimutableArray.set(-1, 0, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 0]
```

If `index` is out of bounds then it is a noop. If you want to just add element to the end consider `push` instead. As of array holes that would kind of degrade type of the array from `Array<value>` to `Array<?value>` so it's considered anti-feature:

```js
AntimutableArray.set(6, 0, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 5]
AntimutableArray.set(16, 0, [1, 2, 3, 4, 5]) // => [1, 2, 3, 4, 5]
```

### `array[n]`

### `first <value> (items:Array<value>) => ?value`

Returns the first element of the supplied array, or void if array contains no elements. Kind of alternative to `array[0]` but can be passed, composed, etc..

```js
AntimutableArray.first([1, 2, 3]) // => 1
AntimutableArray.first([]) == null // => true
```

### `last <value> (items:Array<value>) => ?value`

Returns the last element of the supplied array, or void if array contains no elements. Kind of alternative to `array[array.length - 1]` but can be passed, composed, etc..

```js
AntimutableArray.last([1, 2, 3]) // => 3
AntimutableArray.last([]) == null // => true
```

### `get <value> (n:number, items:Array<value>) => ?value`

Returns `n`-th element of the supplied array or void if array contains no such element.

```js
AntimutableArray.get(4, [1, 2, 3, 4, 5]) // => 5
AntimutableArray.get(0, [1, 2, 3, 4, 5]) // => 1
AntimutableArray.get(2, [1, 2, 3, 4, 5]) // => 3
```

If `n` is negative it is resolved from the end of the supplied array:

```js
AntimutableArray.get(-1, [1, 2, 3, 4, 5]) // => 5
AntimutableArray.get(-5, [1, 2, 3, 4, 5]) // => 1
AntimutableArray.get(-2, [1, 2, 3, 4, 5]) // => 4
```

### `[]`

It is not really necessary but handy at a times.

#### `empty`

Frozen empty array that is often returned by this library functions when result of the operation is an empty array.

```js
AntimutableArray.empty // => []
```

## Install

    npm install antimutable-array

[travis-image]: https://travis-ci.org/Gozala/antimutable-array.svg?branch=master
[travis-url]: https://travis-ci.org/Gozala/antimutable-array
[npm-image]: https://img.shields.io/npm/v/antimutable-array.svg
[npm-url]: https://npmjs.org/package/antimutable-array
[downloads-image]: https://img.shields.io/npm/dm/antimutable-array.svg
[downloads-url]: https://npmjs.org/package/antimutable-array
[standard-image]:https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]:http://standardjs.com/

[array methods]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2
[noop]:https://en.wikipedia.org/wiki/NOP
[flow]:http://flowtype.org


[`Array.prototype.push`]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[`Array.prototype.reverse`]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[`Array.prototype.shift`]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[`Array.prototype.sort`]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
[`Array.prototype.splice`]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[`Array.prototype.unshift`]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[`Array.prototype.concat`]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
