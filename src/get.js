/* @flow */

export const get = <value>
  (index:number, items:Array<value>):?value => {
    const item = index < 0
      ? items[items.length + index]
      : items[index]
    return item
  }

export const first = <value>
  (items:Array<value>):?value =>
  items[0]

export const last = <value>
  (items:Array<value>):?value =>
  items[items.length - 1]

export default get
