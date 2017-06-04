const $toCamelCase = Symbol('toCamelCase')

if (!String.prototype[$toCamelCase]) {

  /**
   * toCamelCase
   * @param {'upper'|'lower'} params UpperCamelCase or lowerCamelCase
   * @return {string} camel cased string
   */
  String.prototype[$toCamelCase] = function(params = 'lower') {

    return this
      .split('-')
      .map(x => x.split('_'))
      .reduce((prev, x) => {
        prev.push(x)
        return prev
      }, [])
      .map((x, i) => {
        if (i === 0) {
          if (params === 'upper') {
            x[0] = x[0].toUpperCase()
          }
        }
        return x
      })
      .join('')

  }
}

export default $toCamelCase
