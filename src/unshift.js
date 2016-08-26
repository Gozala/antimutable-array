/* @flow */

export const unshift = <value>
  (item:value, items:Array<value>):Array<value> => {
    if (items.length === 0) {
      return [item]
    } else {
      const output = items.slice(0)
      output.unshift(item)
      return output
    }
  }

export default unshift
