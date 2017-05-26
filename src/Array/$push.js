const $push = Symbol('push')

if (!Array.prototype[$push]) {
  /**
   * extend prototype method to get new pushed array
   * @param  {Any} elem new Element
   * @return {Array} new pushed Array
   */
  Array.prototype[$push] = function(elem) {
    const result = [...this]
    result.push(elem)
    return result
  }
}

export default $push
