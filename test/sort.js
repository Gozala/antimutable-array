/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

const descending =
  (left, right) =>
  left > right
  ? -1
  : left < right
  ? 1
  : 0

test('test noop', test => {
  const blank = []

  test.equal(ImmutableArray.sort(blank), blank)
  test.deepEqual(blank, [])
  test.equal(ImmutableArray.sortBy(descending, blank), blank)
  test.deepEqual(blank, [])

  const single = [1]

  test.equal(ImmutableArray.sort(single), single)
  test.deepEqual(single, [1])
  test.equal(ImmutableArray.sortBy(descending, single), single)
  test.deepEqual(single, [1])

  test.end()
})

test('test sort', test => {
  const source = [1, 6, 5, 7, 2]
  const array = source.slice(0)

  test.deepEqual(ImmutableArray.sort(array), [1, 2, 5, 6, 7])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.sortBy(descending, array), [7, 6, 5, 2, 1])
  test.deepEqual(array, source)

  test.end()
})
