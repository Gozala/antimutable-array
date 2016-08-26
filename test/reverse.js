/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test noop', test => {
  const single = [1]
  const blank = []

  test.equal(AntimutableArray.reverse(blank), blank)
  test.deepEqual(blank, [])

  test.equal(AntimutableArray.reverse(single), single)
  test.deepEqual(single, [1])

  test.end()
})

test('test reverse', test => {
  const array = [1, 2, 3, 4]

  test.deepEqual(AntimutableArray.reverse(array), [4, 3, 2, 1])
  test.deepEqual(array, [1, 2, 3, 4])

  test.deepEqual(AntimutableArray.reverse([]), [])
  test.deepEqual(AntimutableArray.reverse([1]), [1])
  test.deepEqual(AntimutableArray.reverse([1, 2]), [2, 1])
  test.deepEqual(AntimutableArray.reverse([1, 2, 1]), [1, 2, 1])
  test.deepEqual(AntimutableArray.reverse([1, 2, 3]), [3, 2, 1])

  test.end()
})
