import $cummulatives from './$cumulatives'
const $weightedRandom  = Symbol('weightedRandom')

if (!Array.prototype[$weightedRandom]) {

  /**
   * returns a weighted randomly picked element
   * @param  {Array<number>} arg weights
   * @param  {Number} [accuracy=100] [description]
   * @return {any}               picked element
   */
  Array.prototype[$weightedRandom] = function(arg, accuracy = 100) {

    const self = this

    const weights = (
      Array(self.length)
        .fill(0)
        .map((x, i) => x + arg[i] ? arg[i] : 0)
    )

    const sum = weights.reduce((prev, x) => prev + x, 0)

    const cumulatives = weights.map(x => accuracy * x / sum)[$cummulatives]

    const lucky = Math.floor(Math.random() * accuracy)

    const targetIndex = cumulatives.map(x => x < lucky).indexOf(false)

    return self[targetIndex]
  }
}

export default $weightedRandom
