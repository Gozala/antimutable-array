/* @flow */

export const insert = <value>
  (index:number, include:Array<value>, items:Array<value>):Array<value> => {
    const {length} = items
    const offset = index < 0
      ? length + index
      : index

    if (include.length === 0) {
      return items
    } else if (length === 0 && (offset <= 0 || offset >= length)) {
      return include
    } else {
      const output = items.slice(0)
      const position = offset < 0
        ? 0
        : offset >= length
        ? length
        : offset
      output.splice(position, 0, ...include)
      return output
    }
  }

export default insert
