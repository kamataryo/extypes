import test from 'ava'
import fs   from 'fs'
import path from 'path'
import * as functionProps from 'Function'

test.cb('All module has been exported', t => {
  fs.readdir('./src/Function/', (err, paths) => {

    if (err) { throw err }

    const props = paths
      .map(filename => path.parse(filename).name)
      .filter(name => name !== 'index')

    const exported = Object.keys(functionProps)
      .filter(key => key !== 'default')

    const defaults = Object.keys(functionProps.default)

    t.deepEqual(props, exported)
    t.deepEqual(props, defaults)
    t.end()
  })
})

Object.keys(functionProps.default)
  .forEach(key => test(`${key} is a symbol`, t => t.is(typeof functionProps.default[key], 'symbol')))
