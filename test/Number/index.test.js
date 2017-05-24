import test from 'ava'
import props, {
  $toRange,
} from 'Number'

test('types', t => t.is(typeof $toRange, 'symbol'))

test('defaults', t => t.is(props.$toRange, $toRange))
