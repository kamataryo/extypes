import test from 'ava'
import $zeroPadding from 'Number/$zeroPadding'

test('zero padding 1)', t => t.deepEqual(
  123[$zeroPadding](4),
  '0123'
))

test('zero padding 2)', t => t.deepEqual(
  123[$zeroPadding](2),
  '23'
))

test('zero padding 3)', t => t.deepEqual(
  123.4[$zeroPadding](4),
  '0123.4'
))

test('zero padding 4)', t => t.deepEqual(
  123.4[$zeroPadding](2),
  '23.4'
))

test('zero padding 5)', t => t.deepEqual(
  1.23[$zeroPadding](false, 4),
  '1.2300'
))

test('zero padding 6)', t => t.deepEqual(
  1.234[$zeroPadding](false, 2),
  '1.23'
))

test('zero padding 7)', t => t.deepEqual(
  1.23[$zeroPadding](4, 4),
  '0001.2300'
))
