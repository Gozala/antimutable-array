/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test unshfit', test => {
  const source = [1, 2, 3]
  const array = source.slice(0)
  const blank = []

  test.deepEqual(AntimutableArray.unshift(0, array), [0, 1, 2, 3])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.unshift(8, array), [8, 1, 2, 3])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.unshift(1, blank), [1])
  test.deepEqual(blank, [])
  test.deepEqual(AntimutableArray.unshift(1, [1]), [1, 1])
  test.deepEqual(AntimutableArray.unshift(1, [1, 2]), [1, 1, 2])

  test.end()
})
