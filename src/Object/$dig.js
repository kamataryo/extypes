const $dig = Symbol('dig')

if (!Object.prototype[$dig]) {

  /**
   * dig the property
   * @param  {Array<any>} props Array of digging props ordered
   * @param  {any} fallback if no props
   * @return {any}          what digged out
   */
  Object.prototype[$dig] = function(props, fallback) {
    return props.reduce((prev, prop) => {
      if (prev[prop] !== undefined) {
        return prev[prop]
      } else {
        return fallback
      }
    }, this)
  }
}

export default $dig
