/**
 * extend prototype method to get new pushed array
 * @file
 */

const $push = Symbol('push')

if (!Array.prototype[$push]) {
  /**
   * 非破壊的push
   * @param  {Any} x 新しい要素
   * @return {Array} 新しい配列
   */
  Array.prototype[$push] = function(x:any) {
    const result = [...this]
    result.push(x)
    return result
  }
}

export default $push
