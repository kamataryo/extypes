import test from 'ava'
import $cumulatives from 'Array/$cumulatives'

test('prototype extension', t => t.deepEqual(
  [1, 10, 100][$cumulatives],
  [1, 11, 111]
))
