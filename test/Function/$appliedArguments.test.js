import test from 'ava'
import $appliedArguments from 'Function/$appliedArguments'
import $partialApply     from 'Function/$partialApply'

// eslint-disable-next-line require-jsdoc
const func = (a, b, c) => a + b + c

test('appliedArguments 1)', t => t.deepEqual(
  func[$partialApply](1, 2)[$appliedArguments],
  [1, 2]
))

test('appliedArguments 2)', t => t.deepEqual(
  func[$appliedArguments],
  []
))
