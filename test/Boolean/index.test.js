import test from 'ava'
import fs   from 'fs'
import path from 'path'
import * as booleanProps from 'Boolean'

test.cb('All module has been exported', t => {
  fs.readdir('./src/Boolean/', (err, paths) => {

    if (err) { throw err }

    const props = paths
      .map(filename => path.parse(filename).name)
      .filter(name => name !== 'index')

    const exported = Object.keys(booleanProps)
      .filter(key => key !== 'default')

    const defaults = Object.keys(booleanProps.default)

    t.deepEqual(props, exported)
    t.deepEqual(props, defaults)
    t.end()
  })
})

Object.keys(booleanProps.default)
  .forEach(key => test(`${key} is a symbol`, t => t.is(typeof booleanProps.default[key], 'symbol')))
