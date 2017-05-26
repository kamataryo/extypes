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
          const nextValue = prev.cumulative + x
          prev.cumulative = nextValue
          prev.result.push(nextValue)
          return prev
        }, { cumulative: 0, result: [] })
        .result
    }
  })
}

export default $cumulatives
