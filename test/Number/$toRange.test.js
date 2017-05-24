import test from 'ava'
import $toRange from 'Number/$toRange'

test('toRange', t => t.deepEqual(
  12[$toRange](),
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
))
