/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test push', test => {
  const source = [1, 2, 3]
  const blank = []

  test.deepEqual(AntimutableArray.push(0, source), [1, 2, 3, 0])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(AntimutableArray.push(8, source), [1, 2, 3, 8])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(AntimutableArray.push(1, blank), [1])
  test.deepEqual(blank, [])
  test.deepEqual(AntimutableArray.push(1, [1]), [1, 1])
  test.deepEqual(AntimutableArray.push(1, [1, 2]), [1, 2, 1])

  test.end()
})
