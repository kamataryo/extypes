# @kamataryo/extypes

[![Build Status](https://travis-ci.org/kamataryo/extypes.svg?branch=master)](https://travis-ci.org/kamataryo/extypes)
[![npm version](https://badge.fury.io/js/%40kamataryo%2Fextypes.svg)](https://badge.fury.io/js/%40kamataryo%2Fextypes)
[![codecov](https://codecov.io/gh/kamataryo/extypes/branch/master/graph/badge.svg)](https://codecov.io/gh/kamataryo/extypes)


JavaScript extension property/method for native types.

## install

```shell
$ npm install @kamataryo/extypes --save-dev
```

## usage

```javascript

// import all
import props from '@kamataryo/extypes'
console.log([0, 1, 2][props.Array.$random]) // 0, 1, or 2

// partial import on a certain type
import props, { $random } from '@kamataryo/extypes/Array'
console.log([0, 1, 2][props.$random]) // 0, 1, or 2
console.log([0, 1, 2][$random]) // 0, 1, or 2

// partial import on a certain property/method
import $radom from '@kamataryo/extypes/Array/$random'
console.log([0, 1, 2][$random]) // 0, 1, or 2
```

## APIs

### Array

####  `Array[$flatten]()`

Flatten array.

```javascript
[[0, 1], [2], 3][$flatten]() // [0, 1, 2, 3]
```

#### `Array[$push](any)`

Altenative for `Array.push`.

```javascript
[0, 1, 2][$push](3) // [0, 1, 2, 3]
```

#### `Array[$random]`

Pick element randomly.

```javascript
[0, 1, 2][$random] // 0, 1, or 2
```
## deployment(for commiters)

```shell
$ npm version patch -m "some patch"
$ npm version minor -m "some minor update"
$ npm version major -m "some major update"
```
