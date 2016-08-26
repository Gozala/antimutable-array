/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test noop', test => {
  const source = [1, 2, 3, 7, 2, 5]

  test.equal(AntimutableArray.move(0, 0, source), source)
  test.equal(AntimutableArray.move(1, 1, source), source)
  test.equal(AntimutableArray.move(0, -10, source), source)
  test.equal(AntimutableArray.move(-1, 10, source), source)
  test.equal(AntimutableArray.move(10, 17, source), source)
  test.equal(AntimutableArray.move(2, -4, source), source)
  test.equal(AntimutableArray.move(1, -5, source), source)
  test.equal(AntimutableArray.move(3, -3, source), source)
  test.equal(AntimutableArray.move(4, -2, source), source)
  test.equal(AntimutableArray.move(5, -1, source), source)
  test.equal(AntimutableArray.move(6, -1, source), source)

  test.end()
})

test('test actual moves', test => {
  const source = [1, 2, 3, 7, 2, 5]

  test.deepEqual(AntimutableArray.move(0, 2, source), [2, 3, 1, 7, 2, 5])
  test.deepEqual(source, [1, 2, 3, 7, 2, 5])
  test.deepEqual(AntimutableArray.move(2, 0, source), [3, 1, 2, 7, 2, 5])
  test.deepEqual(source, [1, 2, 3, 7, 2, 5])
  test.deepEqual(AntimutableArray.move(4, 5, source), [1, 2, 3, 7, 5, 2])
  test.deepEqual(source, [1, 2, 3, 7, 2, 5])
  test.deepEqual(AntimutableArray.move(0, -1, source), [2, 3, 7, 2, 5, 1])
  test.deepEqual(source, [1, 2, 3, 7, 2, 5])
  test.deepEqual(AntimutableArray.move(-1, 0, source), [5, 1, 2, 3, 7, 2])
  test.deepEqual(source, [1, 2, 3, 7, 2, 5])

  test.end()
})
