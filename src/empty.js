/* @flow */

const blank:Array<any> = Object.freeze([])

export const empty = <value>
  ():Array<value> =>
  blank

export default empty
