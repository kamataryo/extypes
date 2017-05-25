import test from 'ava'
import fs   from 'fs'
import path from 'path'
import * as objectProps from 'Object'

test.cb('All module has been exported', t => {
  fs.readdir('./src/Object/', (err, paths) => {

    if (err) { throw err }

    const props = paths
      .map(filename => path.parse(filename).name)
      .filter(name => name !== 'index')

    const exported = Object.keys(objectProps)
      .filter(key => key !== 'default')

    const defaults = Object.keys(objectProps.default)

    t.deepEqual(props, exported)
    t.deepEqual(props, defaults)
    t.end()
  })
})

Object.keys(objectProps.default)
  .forEach(key => test(`${key} is a symbol`, t => t.is(typeof objectProps.default[key], 'symbol')))
