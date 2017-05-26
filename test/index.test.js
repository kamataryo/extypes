import test          from 'ava'
import props         from 'index'
import arrayProps    from 'Array'
import booleanProps  from 'Boolean'
import dateProps     from 'Date'
import functionProps from 'Function'
import numberProps   from 'Number'
import objectProps   from 'Object'
import stringProps   from 'String'
import symbolProps   from 'Symbol'


test('Parental object of Array', t => {
  t.is(props.Array, arrayProps)
})

test('Parental object of Boolean', t => {
  t.is(props.Boolean, booleanProps)
})

test('Parental object of Date', t => {
  t.is(props.Date, dateProps)
})

test('Parental object of Function', t => {
  t.is(props.Function, functionProps)
})

test('Parental object of Number', t => {
  t.is(props.Number, numberProps)
})

test('Parental object of Object', t => {
  t.is(props.Object, objectProps)
})

test('Parental object of String', t => {
  t.is(props.String, stringProps)
})

test('Parental object of Symbol', t => {
  t.is(props.Symbol, symbolProps)
})
