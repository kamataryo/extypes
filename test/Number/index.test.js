import test from 'ava'
import fs   from 'fs'
import path from 'path'
import * as numberProps from 'Number'

test.cb('All module has been exported', t => {
  fs.readdir('./src/Number/', (err, paths) => {

    if (err) { throw err }

    const props = paths
      .map(filename => path.parse(filename).name)
      .filter(name => name !== 'index')

    const exported = Object.keys(numberProps)
      .filter(key => key !== 'default')

    const defaults = Object.keys(numberProps.default)

    t.deepEqual(props, exported)
    t.deepEqual(props, defaults)
    t.end()
  })
})

Object.keys(numberProps.default)
  .forEach(key => test(`${key} is a symbol`, t => t.is(typeof numberProps.default[key], 'symbol')))
