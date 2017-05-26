import test from 'ava'
import fs   from 'fs'
import path from 'path'
import * as symbolProps from 'Symbol'

test.cb('All module has been exported', t => {
  fs.readdir('./src/Symbol/', (err, paths) => {

    if (err) { throw err }

    const props = paths
      .map(filename => path.parse(filename).name)
      .filter(name => name !== 'index')

    const exported = Object.keys(symbolProps)
      .filter(key => key !== 'default')

    const defaults = Object.keys(symbolProps.default)

    t.deepEqual(props, exported)
    t.deepEqual(props, defaults)
    t.end()
  })
})

Object.keys(symbolProps.default)
  .forEach(key => test(`${key} is a symbol`, t => t.is(typeof symbolProps.default[key], 'symbol')))
