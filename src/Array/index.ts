import flatten from './$flatten'
import push    from './$push'
import random  from './$random'


export const $flatten:Symbol = flatten
export const $push:Symbol    = push
export const $random:Symbol  = random

export default { $flatten, $push, $random }
