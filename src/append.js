/* @flow */

export const append = <value>
  (left:Array<value>, right:Array<value>):Array<value> => {
    const output = left.length === 0
      ? right
      : right.length === 0
      ? left
      : left.concat(right)
    return output
  }

export default append
