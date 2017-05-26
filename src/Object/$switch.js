import switz from 'switz'
const $switch = Symbol('switch')

!Object.prototype[$switch] && Object.defineProperty(Object.prototype, $switch, {

  get: function() {

    const chain = {
      case: (matcher, cb) => {
        switz(this, t => {
          t.case(matcher, cb)
        })
        return chain
      }
    }
    return chain
  }
})

export default $switch
