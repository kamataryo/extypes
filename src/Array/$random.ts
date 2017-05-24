const $random = Symbol('random')

if (!Array.prototype[$random]) {
  Object.defineProperty(Array.prototype, $random, {
    /**
     * return randomly
     * @return {Any} a randomly selected element
     */
    get: function() {
      const self:any[] = this
      return self[Math.floor(Math.random() * self.length)]
    }
  })
}

export default $random
