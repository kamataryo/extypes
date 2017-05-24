import test from 'ava'
import {
  $flatten,
  $push,
  $random,
} from 'Array'

test('types', t => {
  t.is(typeof $flatten, 'symbol')
  t.is(typeof $push,    'symbol')
  t.is(typeof $random,  'symbol')
})
