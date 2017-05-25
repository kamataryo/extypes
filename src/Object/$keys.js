const $keys = Symbol('keys')

if (!Object.prototype[$keys]) {
  Object.defineProperty(Object.prototype, $keys, {
    /**
     * get Object keys
     * @return {Array} keys of the Object
     */
    get: function() {
      return Object.keys(this)
    }
  })
}

export default $keys
