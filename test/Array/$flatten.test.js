import test from 'ava'
import $flatten from 'Array/$flatten'

test('Types', t => t.is(typeof $flatten, 'symbol'))

test('prototype extension', t => {
  const source = [[0, 1], [2, 3]]
  const value = source[$flatten]()
  t.deepEqual(value, [0, 1, 2, 3])
  t.not(source, value)
})
