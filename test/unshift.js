/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test unshfit', test => {
  const source = [1, 2, 3]
  const array = source.slice(0)
  const blank = []

  test.deepEqual(ImmutableArray.unshift(0, array), [0, 1, 2, 3])
  test.deepEqual(array, source)
  test.deepEqual(ImmutableArray.unshift(8, array), [8, 1, 2, 3])
  test.deepEqual(array, source)
  test.deepEqual(ImmutableArray.unshift(1, blank), [1])
  test.deepEqual(blank, [])
  test.deepEqual(ImmutableArray.unshift(1, [1]), [1, 1])
  test.deepEqual(ImmutableArray.unshift(1, [1, 2]), [1, 1, 2])

  test.end()
})
