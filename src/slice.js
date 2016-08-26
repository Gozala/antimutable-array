/* @flow */

import resolve from './util/resolve-index'
import empty from './empty'

export const slice = <value>
  (from:number, to:number, items:Array<value>):Array<value> => {
    const {length} = items
    const start = resolve(0, length, from)
    const end = resolve(0, length, to)
    if (start === 0 && end === length) {
      return items
    } else if (start >= end) {
      return empty
    } else {
      return items.slice(start, end)
    }
  }
