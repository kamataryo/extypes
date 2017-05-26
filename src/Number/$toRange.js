const $toRange = Symbol('toRange')

if (!Number.prototype[$toRange]) {

  /**
   * toRange
   * @return {Array} Range
   */
  Number.prototype[$toRange] = function() {
    const result = []
    for (var i = 0; i < this; i++) {
      result.push(i)
    }
    return result
  }
}

export default $toRange
