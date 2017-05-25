import test        from 'ava'
import props       from 'index'
import arrayProps  from 'Array'
import numberProps from 'Number'
import objectProps from 'Object'

test('Parental object of Array', t => {
  t.is(props.Array, arrayProps)
})

test('Parental object of Number', t => {
  t.is(props.Number, numberProps)
})

test('Parental object of Object', t => {
  t.is(props.Object, objectProps)
})
