import test       from 'ava'
import props      from 'index'
import arrayProps from 'Array'

test('Parental object', t => {
  t.is(props.Array, arrayProps)
})
