const $cumulatives = Symbol('cumulatives')

if (!Array.prototype[$cumulatives]) {

  Object.defineProperty(Array.prototype, $cumulatives, {

    get: function() {
      return this
        .reduce((prev, x) => ({
          cumulative : prev.cumulative + x,
          result     : prev.result.concat([prev.cumulative + x]),
        }), { cumulative: 0, result: [] })
        .result
    }
  })
}

export default $cumulatives
