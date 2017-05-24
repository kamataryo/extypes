import test from 'ava'
import props, {
  $flatten,
  $push,
  $random,
} from 'Array'

test('types', t => {
  t.is(typeof $flatten, 'symbol')
  t.is(typeof $push,    'symbol')
  t.is(typeof $random,  'symbol')
})

test('defaults', t => {
  t.is(props.$flatten, $flatten)
  t.is(props.$push,    $push)
  t.is(props.$random,  $random)
})
