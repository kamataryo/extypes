const $multiply = Symbol('multiply')

if (!Object.prototype[$multiply]) {

  /**
   * multiply the property
   * @param  {number} num Number of result array
   * @return {array}  array
   */
  Object.prototype[$multiply] = function(num) {
    const result = []
    for (var i = 0; i < num; i++) {
      result.push({ ...this })
    }
    return result
  }
}

export default $multiply
