/* @flow */

import {empty} from './empty'

export const drop = <value>
  (n:number, items:Array<value>):Array<value> => {
    const output = items.length <= n
    ? empty()
    : n <= 0
    ? items
    : items.slice(n)
    return output
  }

export default drop
