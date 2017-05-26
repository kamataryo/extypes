import test from 'ava'
import fs   from 'fs'
import path from 'path'
import * as dateProps from 'Date'

test.cb('All module has been exported', t => {
  fs.readdir('./src/Date/', (err, paths) => {

    if (err) { throw err }

    const props = paths
      .map(filename => path.parse(filename).name)
      .filter(name => name !== 'index')

    const exported = Object.keys(dateProps)
      .filter(key => key !== 'default')

    const defaults = Object.keys(dateProps.default)

    t.deepEqual(props, exported)
    t.deepEqual(props, defaults)
    t.end()
  })
})

Object.keys(dateProps.default)
  .forEach(key => test(`${key} is a symbol`, t => t.is(typeof dateProps.default[key], 'symbol')))
