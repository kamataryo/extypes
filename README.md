# @kamataryo/extypes

[![Build Status](https://travis-ci.org/kamataryo/extypes.svg?branch=master)](https://travis-ci.org/kamataryo/extypes)
[![npm version](https://badge.fury.io/js/%40kamataryo%2Fextypes.svg)](https://badge.fury.io/js/%40kamataryo%2Fextypes)
[![codecov](https://codecov.io/gh/kamataryo/extypes/branch/master/graph/badge.svg)](https://codecov.io/gh/kamataryo/extypes)


JavaScript extension for primitive data types.

## features

- collision free with `Symbol` property.
- Partial import is Available. This saves file size when bundled

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

### Object

#### `Object[$keys]`

Wrapper of `Object.keys`.

```javascript
{ foo: 'FOO', bar: 'BAR' }[$keys] // ['foo', 'bar']
```

#### `Object[$values]`

Wrapper of `Object.values`.

```javascript
{ foo: 'FOO', bar: 'BAR' }[$values] // ['FOO', 'BAR']
```

### Array

####  `Array[$flatten]()`

Flatten array.

```javascript
[[0, 1], [2], 3][$flatten]() // [0, 1, 2, 3]
```

#### `Array[$push](any)`

Non-destructive altenative method for `Array.push`.

```javascript
[0, 1, 2][$push](3) // [0, 1, 2, 3]
```

#### `Array[$random]`

Pick element randomly.

```javascript
[0, 1, 2][$random] // 0, 1, or 2
```

### Number

#### `Number[$toRange]()`

Create range array.

```javascript
100[$toRange]() // [0, 1, ... ,99]
```

#### `Number[$zeroPadding]()`

Create zero padding string.

```javascript
123[$zeroPadding](5) // '00123'
```

## deployment (for commiters)

```shell
$ npm version patch -m "some patch"
$ npm version minor -m "some minor update"
$ npm version major -m "some major update"
```

## TODOs

- check performance
- How to deal with Lodash/Underscore?
