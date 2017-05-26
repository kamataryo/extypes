import $appliedArguments from './$appliedArguments'

const $partialApply = Symbol('partialApply')

if (!Function.prototype[$partialApply]) {

  /**
   * apply arguments partially
   * @return {function} partially applied function
   */
  Function.prototype[$partialApply] = function() {
    const self = this
    const applyingArguments = arguments

    const curried = function() {
      return self(...[...applyingArguments, ...arguments])
    }
    curried[$appliedArguments] = [...applyingArguments]
    return curried
  }
}

export default $partialApply
