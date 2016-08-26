/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test noop', test => {
  const source = [1, 2, 3, 4, 5]
  const array = source.slice(0)

  test.equal(ImmutableArray.slice(0, 5, array), array)
  test.deepEqual(array, source)
  test.equal(ImmutableArray.slice(0, 6, array), array)
  test.deepEqual(array, source)
  test.equal(ImmutableArray.slice(-8, 8, array), array)
  test.deepEqual(array, source)
  test.equal(ImmutableArray.slice(-5, 5, array), array)
  test.deepEqual(array, source)

  test.end()
})

test('test slice', test => {
  const source = [1, 2, 3, 4, 5]
  const array = source.slice(0)

  const cases = [
    [0, -17],
    [0, -2],
    [0, -1],
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [1, -1],
    [1, -2],
    [1, -3],
    [1, 0],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [3, 1],
    [3, 4],
    [2, 7],
    [2, 4],
    [-5, -2],
    [-7, -1],
    [-8, -9],
    [-10, -2],
    [10, 80],
    [5, 5],
    [4, 4],
    [4, 5],
    [-2, -7]
  ]

  cases.forEach(([from, to]) => {
    test.deepEqual(ImmutableArray.slice(from, to, array), array.slice(from, to))
    test.deepEqual(array, source)
  })

  test.end()
})
