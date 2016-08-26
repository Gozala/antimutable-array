/* @flow */

export const reverse = <value>
  (items:Array<value>):Array<value> => {
    const output = items.length <= 1
      ? items
      : items.slice(0).reverse()
    return output
  }

export default reverse
