import test from 'ava'
import $intersect from 'Array/$intersect'

test('Types', t => t.is(typeof $intersect, 'symbol'))

test('prototype extension', t => t.deepEqual(
  [1, 2, 3][$intersect]([2, 3, 4]),
  [2, 3])
)
