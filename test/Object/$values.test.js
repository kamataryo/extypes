import test from 'ava'
import $values from 'Object/$values'

test('toRange', t => t.deepEqual(
  { a: 'A', b: 'B' }[$values],
  ['A', 'B']
))
