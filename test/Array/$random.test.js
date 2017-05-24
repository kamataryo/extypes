import test from 'ava'
import $random from 'Array/$random'

test('Types', t => t.is(typeof $random, 'symbol'))

test('prototype extension', t => {
  const value = [1, 2, 3][$random]
  t.true(value === 1 || value === 2 || value === 3)
})
