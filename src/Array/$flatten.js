const $flatten = Symbol('flatten')

if (!Array.prototype[$flatten]) {
  /**
   * [description]
   * @return {Array} flattened array
   */
  Array.prototype[$flatten] = function() {

    return this.reduce((prev, x) => {
      if (Array.isArray(x)) {
        return prev.concat(x)
      } else {
        prev.push(x)
        return prev
      }
    }, [])
  }
}

export default $flatten
