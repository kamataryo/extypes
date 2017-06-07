import test from 'ava'
import $dig from 'Object/$dig'

const obj = { a: { b: { c: 'd' } } }

test('toRange', t => t.deepEqual(
  obj[$dig](['a', 'b', 'c']),
  'd'
))

test('toRange', t => t.deepEqual(
  obj[$dig](['a', 'b', 'c', 'x'], 'not found'),
  'not found'
))
