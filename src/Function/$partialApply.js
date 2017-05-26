const $partialApply = Symbol('partialApply')

if (!Function.prototype[$partialApply]) {

  Function.prototype[$partialApply] = function() {
    const self = this
    const applyingArguments = arguments
    return function() {
      return self(...[...applyingArguments, ...arguments])
    }
  }
}

export default $partialApply
