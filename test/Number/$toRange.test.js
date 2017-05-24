import test from 'ava'
import $torange from 'Number/$torange'

test('toRange', t => t.deepEqual(
  12[$torange](),
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
))
