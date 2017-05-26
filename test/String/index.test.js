import test from 'ava'
import fs   from 'fs'
import path from 'path'
import * as stringProps from 'String'

test.cb('All module has been exported', t => {
  fs.readdir('./src/String/', (err, paths) => {

    if (err) { throw err }

    const props = paths
      .map(filename => path.parse(filename).name)
      .filter(name => name !== 'index')

    const exported = Object.keys(stringProps)
      .filter(key => key !== 'default')

    const defaults = Object.keys(stringProps.default)

    t.deepEqual(props, exported)
    t.deepEqual(props, defaults)
    t.end()
  })
})

Object.keys(stringProps.default)
  .forEach(key => test(`${key} is a symbol`, t => t.is(typeof stringProps.default[key], 'symbol')))
