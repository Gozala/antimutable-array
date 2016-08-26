/* @flow */

export const substitute = <value>
  (index:number, removeCount:number, insert:Array<value>, items:Array<value>):Array<value> => {
    if (removeCount <= 0 && insert.length === 0) {
      return items
    } else if (items.length === 0) {
      return insert
    } else {
      const output = items.slice(0)
      output.splice(index, removeCount, ...insert)
      return output
    }
  }

export default substitute
