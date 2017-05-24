const $toRange = Symbol('torange')


if (!Number.prototype[$toRange]) {

  Number.prototype[$toRange] = function() {
    const result = []
    for (var i = 0; i < this; i++) {
      result.push(i)
    }
    return result
  }
}

export default $toRange
