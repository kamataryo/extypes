/**
 * extend property to get a picked element from an array randomly
 * @file
 */

const $random  = Symbol('random')

if (!Array.prototype[$random]) {
  Object.defineProperty(Array.prototype, $random, {
    /**
     * return randomly
     * @return {Any} a randomly selected element
     */
    get: function() {
      return this[Math.floor(Math.random() * this.length)]
    }
  })
}

export default $random
