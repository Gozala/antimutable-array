/* @flow */

export const push = <value>
  (item:value, items:Array<value>):Array<value> => {
    if (items.length === 0) {
      return [item]
    } else {
      const output = items.slice(0)
      output.push(item)
      return output
    }
  }

export default push
