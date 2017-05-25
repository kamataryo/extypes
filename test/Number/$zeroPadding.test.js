import test from 'ava'
import $zeroPadding from 'Number/$zeroPadding'

test('zero fill 1)', t => t.deepEqual(
  123[$zeroPadding](4),
  '0123'
))

test('zero fill 2)', t => t.deepEqual(
  123[$zeroPadding](2),
  '23'
))
