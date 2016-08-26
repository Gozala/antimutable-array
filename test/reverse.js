/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test noop', test => {
  const single = [1]
  const blank = []

  test.equal(ImmutableArray.reverse(blank), blank)
  test.deepEqual(blank, [])

  test.equal(ImmutableArray.reverse(single), single)
  test.deepEqual(single, [1])

  test.end()
})

test('test reverse', test => {
  const array = [1, 2, 3, 4]

  test.deepEqual(ImmutableArray.reverse(array), [4, 3, 2, 1])
  test.deepEqual(array, [1, 2, 3, 4])

  test.deepEqual(ImmutableArray.reverse([]), [])
  test.deepEqual(ImmutableArray.reverse([1]), [1])
  test.deepEqual(ImmutableArray.reverse([1, 2]), [2, 1])
  test.deepEqual(ImmutableArray.reverse([1, 2, 1]), [1, 2, 1])
  test.deepEqual(ImmutableArray.reverse([1, 2, 3]), [3, 2, 1])

  test.end()
})
