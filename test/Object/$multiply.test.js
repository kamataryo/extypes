import test from 'ava'
import $multiply from 'Object/$multiply'

const obj = { a: 'A' }

test('multiply', t => t.deepEqual(
  obj[$multiply](2),
  [{ a: 'A' }, { a: 'A' }]
))
