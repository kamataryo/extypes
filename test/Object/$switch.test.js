import test from 'ava'
import $switch from 'Object/$switch'

test.cb('switch', t => 'abc'[$switch]
  .case('ABC', () => {
    t.true(false)
  })
  .case('abc', () => {
    t.true(true)
    t.end()
  })
)

test.cb('switch default', t => 'abc'[$switch]
  .case('ABC', () => t.true(false))
  .case('ABc', () => t.true(false))
  .default(() => {
    t.true(true)
    t.end()
  })
)
