/* @flow */

export const resolve =
  (min:number, max:number, n:number) => {
    // Resolves index with in the given `min ... max` range.
    // negative `n` is treated as `max - n`.

    const out = n < 0
      ? clip(min, max, max + n)
      : clip(min, max, n)
    return out
  }

export const clip =
  (min:number, max:number, n:number) => {
    // Clips given `n` to a range of `min ... max` range.
    const out = n < min
      ? min
      : n > max
      ? max
      : n
    return out
  }

export default resolve
