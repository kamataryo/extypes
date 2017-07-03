const $decumulatives = Symbol('decumulatives')

if (!Array.prototype[$decumulatives]) {

  Object.defineProperty(Array.prototype, $decumulatives, {

    /**
     * get decumulatives of the given array
     * @return {Array} cumulative
     */
    get: function() {
      return this
        .reduce((prev, x) => {
          prev.result.push(x - prev.cumulative)
          prev.cumulative = x
          return prev
        }, { cumulative: 0, result: [] })
        .result
    },
  })
}

export default $decumulatives
