import test from 'ava'
import $weightedRandom from 'Array/$weightedRandom'

test('prototype extension 1)', t => {
  const value = [1, 2, 3, 4, 5][$weightedRandom]([1, 0, 0, 0, 0])
  t.true(value === 1)
})

test('prototype extension 2)', t => {
  const value = [1, 2, 3, 4, 5][$weightedRandom]([0, 0, 1, 0, 0])
  t.true(value === 3)
})

test('prototype extension 3)', t => {
  const value = [1, 2, 3, 4, 5][$weightedRandom]([0, 0, 0, 0, 1])
  t.true(value === 5)
})
