import test from 'ava'
import $weightedRandom from 'Array/$weightedRandom'

test('prototype extension 1)', t => {
  const value = [0, 1, 2, 3, 4][$weightedRandom]([1, 0, 0, 0, 0])
  t.is(value, 0)
})

test('prototype extension 2)', t => {
  const value = [0, 1, 2, 3, 4][$weightedRandom]([0, 0, 1, 0, 0])
  t.is(value, 2)
})

test('prototype extension 3)', t => {
  const value = [0, 1, 2, 3, 4][$weightedRandom]([0, 0, 0, 0, 1])
  t.is(value, 4)
})
