import test from 'ava'
import $switch from 'Object/$switch'

test.cb('switch', t => 'abc'[$switch]
  .case('ABC', () => {
    t.true(false)
    t.end()
  })
  .case('abc', () => {
    t.true(true)
    t.end()
  })
)

test.cb('switch default', t => 'abc'[$switch]
  .case('ABC', () => {
    t.true(false)
    t.end()
  })
  .case('ABc', () => {
    t.true(false)
    t.end()
  })
  .default(() => {
    t.true(true)
    t.end()
  })
)
