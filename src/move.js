/* @flow */

export const move = <value>
  (from:number, to:number, items:Array<value>):Array<value> => {
    const {length} = items
    const lastPositon = length - 1

    const fromOffset = from < 0
      ? length + from
      : from

    const toOffset = to < 0
      ? length + to
      : to

    const fromPosition = fromOffset < 0
      ? 0
      : fromOffset > lastPositon
      ? lastPositon
      : fromOffset

    const toPosition = toOffset < 0
      ? 0
      : toOffset > lastPositon
      ? lastPositon
      : toOffset

    if (fromPosition === toPosition) {
      return items
    } else {
      const output = items.slice(0)
      const item = output.splice(fromPosition, 1)[0]
      output.splice(toPosition, 0, item)
      return output
    }
  }

export default move
