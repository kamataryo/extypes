import flatten from './$flatten'
import push    from './$push'
import random  from './$random'
import weightedRandom from './$weightedRandom'

export const $flatten = flatten
export const $push    = push
export const $random  = random
export const $weightedRandom = weightedRandom

export default {
  $flatten,
  $push,
  $random,
  $weightedRandom,
}
