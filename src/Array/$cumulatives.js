const $cumulatives = Symbol('cumulatives')

if (!Array.prototype[$cumulatives]) {

  Object.defineProperty(Array.prototype, $cumulatives, {

    /**
     * get cumulatives of the given array
     * @return {Array} cumulative
     */
    get: function() {
      return this
        .reduce((prev, x) => {
          prev.result.push(prev.cumulative + x)
          prev.cumulative += x
          return prev
        }, { cumulative: 0, result: [] })
        .result
    }
  })
}

export default $cumulatives
