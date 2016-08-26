/* @flow */

import * as AntimutableArray from '../'
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

  test.equal(AntimutableArray.sort(blank), blank)
  test.deepEqual(blank, [])
  test.equal(AntimutableArray.sortBy(descending, blank), blank)
  test.deepEqual(blank, [])

  const single = [1]

  test.equal(AntimutableArray.sort(single), single)
  test.deepEqual(single, [1])
  test.equal(AntimutableArray.sortBy(descending, single), single)
  test.deepEqual(single, [1])

  test.end()
})

test('test sort', test => {
  const source = [1, 6, 5, 7, 2]
  const array = source.slice(0)

  test.deepEqual(AntimutableArray.sort(array), [1, 2, 5, 6, 7])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.sortBy(descending, array), [7, 6, 5, 2, 1])
  test.deepEqual(array, source)

  test.end()
})
