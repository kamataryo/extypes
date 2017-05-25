const $zeroPadding = Symbol('zeroPadding')


if (!Number.prototype[$zeroPadding]) {

  /**
   * fill number with zero
   * @param  {number} digit number of digit to zero-fill
   * @return {string}       zero-filled text
   */
  Number.prototype[$zeroPadding] = function(digit) {
    return (Array(digit + 1).join('0') + this.toString()).slice(-1 * (digit))
  }
}

export default $zeroPadding
