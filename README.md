# @kamataryo/extypes

[![Build Status](https://travis-ci.org/kamataryo/extypes.svg?branch=master)](https://travis-ci.org/kamataryo/extypes)
[![Build status](https://ci.appveyor.com/api/projects/status/9qa2b5w65c006wg9?svg=true)](https://ci.appveyor.com/project/kamataryo/extypes)
[![Code Climate](https://codeclimate.com/github/kamataryo/extypes/badges/gpa.svg)](https://codeclimate.com/github/kamataryo/extypes)
[![Codecov branch](https://img.shields.io/codecov/c/github/kamataryo/extypes/master.svg)](https://codecov.io/gh/kamataryo/extypes)

[![npm (scoped)](https://img.shields.io/npm/v/@kamataryo/extypes.svg)](https://www.npmjs.com/package/@kamataryo/extypes)
[![downloads](https://img.shields.io/npm/dt/@kamataryo/extypes.svg?style=flat)](https://david-dm.org/@kamataryo/extypes#info=devDependencies)

[![Dependency Status](https://img.shields.io/david/kamataryo/extypes.svg?style=flat)](https://david-dm.org/@kamataryo/extypes)
[![devDependency Status](https://img.shields.io/david/dev/kamataryo/extypes.svg?style=flat)](https://david-dm.org/kamataryo/extypes#info=devDependencies)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Light and safe JavaScript Data type extensions.

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

#### `Object[$switch]`

Wrapper of [switz](https://www.npmjs.com/package/switz).


```javascript
'abc'[$switch]
  .case('ABC', () => console.log('not match'))
  .case('abc', () => console.log('match!'))
  .default(() => console.log('not match'))
// 'match!'
```

### Array

#### `Array[$cummulatives]`

get cummulative values of the array.

```javascript
[1, 10, 100][$cummulative] // [1, 11, 111]
```

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

Pick an element randomly.

```javascript
[0, 1, 2][$random] // 0, 1, or 2
```

#### `Array[$weightedRandom](array)`

Pick an element randomly and weightedly.

```javascript
[0, 1, 2][$weightedRandom]([1, 1, 2]) // 0(25%), 1(25%) or 2(50%)
```

### Function

#### `Function[$partialApply](...args)`

Curry the function.

```javascript
((a, b, c) => a + b + c)[$partialApply](1) // (b + c) => 1 + b + c
```

#### `Function[$appliedArguments]`

Applied argument after curried.

```javascript
((a, b, c) => a + b + c)[$partialApply](1, 2)[$appliedArguments] // [1, 2]
```

### Number

#### `Number[$toRange]()`

Create range array.

```javascript
100[$toRange]() // [0, 1, ... ,99]
```

#### `Number[$zeroPadding](int, dec)`

Create zero padding string.

```javascript
123[$zeroPadding](5)         // '00123'
1.23[$zeroPadding](false, 3) // '1.230'
12.3[$zeroPadding](3, 3)     // '012.300'
```

## initialize deploy secrets (for commiters)

Below initializes..

- encrypted npm deploy token
- encrypted GitHub deploy key

and send new private key to the concerned remote repository.

```shell
$ .bin/travis-setup.sh kamataryo/extypes
```

## deployment (for commiters)

```shell
$ npm version patch -m "some patch"
$ npm version minor -m "some minor update"
$ npm version major -m "some major update"
```

## TODOs

- check performance
- invalid arguments
- How to deal with Lodash/Underscore?
