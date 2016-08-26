/* @flow */

export const sortBy = <value>
  (compare:(left:value, right:value) => number, items:Array<value>) => {
    const output = items.length <= 1
      ? items
      : items.slice(0).sort(compare)
    return output
  }

export const sort = <value>
  (items:Array<value>):Array<value> => {
    const output = items.length <= 1
      ? items
      : items.slice(0).sort()
    return output
  }
