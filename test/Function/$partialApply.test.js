import test from 'ava'
import $partialApply from 'Function/$partialApply'

// eslint-disable-next-line require-jsdoc
const func = (a, b, c) => a + b + c

test('partialApply 1)', t => t.is(
  func(1, 2, 3),
  func[$partialApply](1)(2, 3)
))

test('partialApply 2)', t => t.is(
  func(1, 2, 3),
  func[$partialApply](1, 2)(3)
))
