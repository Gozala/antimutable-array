/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test noop', test => {
  const source = [1, 2, 3, 4, 5]
  const array = source.slice(0)

  test.equal(AntimutableArray.take(10, array), array)
  test.deepEqual(array, source)

  test.equal(AntimutableArray.take(5, array), array)
  test.deepEqual(array, source)

  test.equal(AntimutableArray.take(7, array), array)
  test.deepEqual(array, source)

  test.end()
})

test('test take', test => {
  const source = [1, 2, 3, 4, 5]
  const array = source.slice(0)

  test.deepEqual(AntimutableArray.take(-5, array), [])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(-1, array), [])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(0, array), [])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(1, array), [1])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(2, array), [1, 2])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(3, array), [1, 2, 3])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(4, array), [1, 2, 3, 4])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(5, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(6, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(7, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.take(77, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.end()
})
