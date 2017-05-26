import test from 'ava'
import $decumulatives from 'Array/$decumulatives'

test('prototype extension', t => t.deepEqual(
  [1, 11, 111, 1111][$decumulatives],
  [1, 10, 100, 1000]
))
