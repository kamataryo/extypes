import test from 'ava'
import $keys from 'Object/$keys'

test('toRange', t => t.deepEqual(
  { a: 'A', b: 'B' }[$keys],
  ['a', 'b']
))
