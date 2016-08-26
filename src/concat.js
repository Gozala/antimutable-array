/* @flow */

export const concat = <value>
  (arrays:Array<Array<value>>):Array<value> => {
    const [first, ...rest] = arrays
    const output = rest.length === 0
      ? first
      : first.concat(...rest)
    return output
  }

export default concat
