import test from 'ava'
import $push from 'Array/$push'

test('Types', t => t.is(typeof $push, 'symbol'))

test('prototype extension', t => {
  const source = [0, 1, 2]
  const value = source[$push](3)
  t.deepEqual(value, [0, 1, 2, 3])
  t.deepEqual(source, [0, 1, 2])
})
