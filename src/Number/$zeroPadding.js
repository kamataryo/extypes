const $zeroPadding = Symbol('zeroPadding')


if (!Number.prototype[$zeroPadding]) {

  /**
   * fill number with zero
   * @param  {number|false|undefined} digitA number of digit to zero-fill
   * @param  {number|false|undefined} digitB number of digit to zero-fill
   * @return {string}       zero-filled text
   */
  Number.prototype[$zeroPadding] = function(digitA = false, digitB = false) {

    const [a, b] = this.toString().split('.').map(x => x + '')
    const result = [
      (digitA === false ? a : (Array(digitA + 1).join('0') + a).slice(-1 * (digitA))),
      (digitB === false ? b : (b + Array(digitB).join('0')).slice(0, digitB)),
    ]
      .filter(x => !!x)
      .join('.')
    return result
  }
}

export default $zeroPadding
