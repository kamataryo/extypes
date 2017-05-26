import switz from 'switz'
const $switch = Symbol('switch')

!Object.prototype[$switch] && Object.defineProperty(Object.prototype, $switch, {

  get: function() {

    /**
     * switz context
     * @param  {Context} t context object
     * @return {Switz}   Switz object
     */
    const switchSubject = t => switz(this, t)

    const chain = {
      matcher: matcher => {
        switchSubject(t => t.matcher(matcher))
        return chain
      },
      case: (condition, handler) => {
        switchSubject(t => t.case(condition, handler))
        return chain
      },
      default: handler => {
        switchSubject(t => t.default(handler))
      }
    }
    return chain
  }
})

export default $switch
