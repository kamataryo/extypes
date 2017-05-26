const $appliedArguments = Symbol('appliedArguments')

if (!Function.prototype[$appliedArguments]) {
  Function.prototype[$appliedArguments] = []
}

export default $appliedArguments
