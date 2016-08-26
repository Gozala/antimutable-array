/* @flow */

import empty from './empty'

export const take = <value>
  (n:number, items:Array<value>):Array<value> => {
    const output = items.length <= n
    ? items
    : n <= 0
    ? empty
    : items.slice(0, n)
    return output
  }

export default take
