import test    from 'ava'
import $repeat from 'Function/$repeat'

// eslint-disable-next-line require-jsdoc
const func = (a, b, c) => a + b + c

test('repeat', t => t.deepEqual(
  func[$repeat]([1, 2, 3], 3),
  [6, 6, 6]
))
