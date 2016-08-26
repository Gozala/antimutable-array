/* @flow */

export const set = <value>
  (index:number, item:value, items:Array<value>):Array<value> => {
    const {length} = items
    const position = index < 0
      ? length + index
      : index

    if (position < 0 || position >= length) {
      return items
    } else if (items[position] === item) {
      return items
    } else {
      const output = items.slice(0)
      output[position] = item
      return output
    }
  }

export default set
