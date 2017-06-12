const $intersect = Symbol('intersect')

if (!Array.prototype[$intersect]) {
  /**
   * shallow intersect of array
   * @param {Array} arr intersect param
   * @return {Array} intersected array
   */
  Array.prototype[$intersect] = function(arr) {
    return this
      .filter(element => arr.indexOf(element) !== -1)
  }
}

export default $intersect
