const $values = Symbol('values')

!Object.prototype[$values] && Object.defineProperty(Object.prototype, $values, {
  /**
   * get Object values
   * @return {Array} values of the Object
   */
  get: function() { return Object.values(this) },
})

export default $values
