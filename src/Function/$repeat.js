const $repeat = Symbol('repeat')

if (!Function.prototype[$repeat]) {

  /**
   * call function repeatedly
   * @param  {array}  args arguments in array
   * @param  {number} num  repeating num
   * @return {array}       repeated result in array
   */
  Function.prototype[$repeat] = function(args, num) {

    const result = []
    for (var i = 0; i < num; i++) {
      result.push(this(...args))
    }
    return result
  }
}

export default $repeat
