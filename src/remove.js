/* @flow */

import empty from './empty'

const splice = <value>
  (index:number, n:number, items:Array<value>):Array<value> => {
    const {length} = items
    if (length === 0) {
      return items
    } else if (index >= length) {
      return items
    } else if (n <= 0) {
      return items
    } else if (index === 0) {
      if (n < length) {
        return items.slice(n)
      } else {
        return empty
      }
    } else {
      const output = items.slice(0)
      output.splice(index, n)
      return output
    }
  }

export const removePreceeding = <value>
  (index:number, n:number, items:Array<value>):Array<value> => {
    const position = index - n
    const offset = position < 0
      ? 0 - position
      : 0

    return splice(position + offset, n - offset, items)
  }

export const removeFollowing = <value>
  (index:number, n:number, items:Array<value>):Array<value> => {
    const offset = index < 0
      ? 0 - index
      : 0
    return splice(index + offset, n - offset, items)
  }

export const remove = <value>
  (index:number, n:number, items:Array<value>):Array<value> => {
    if (n > 0) {
      return removeFollowing(index, n, items)
    } else if (n < 0) {
      return removePreceeding(index, 0 - n, items)
    } else {
      return items
    }
  }

export default remove
