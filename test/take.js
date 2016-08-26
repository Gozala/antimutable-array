/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test noop', test => {
  const source = [1, 2, 3, 4, 5]
  const array = source.slice(0)

  test.equal(ImmutableArray.take(10, array), array)
  test.deepEqual(array, source)

  test.equal(ImmutableArray.take(5, array), array)
  test.deepEqual(array, source)

  test.equal(ImmutableArray.take(7, array), array)
  test.deepEqual(array, source)

  test.end()
})

test('test take', test => {
  const source = [1, 2, 3, 4, 5]
  const array = source.slice(0)

  test.deepEqual(ImmutableArray.take(-5, array), [])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(-1, array), [])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(0, array), [])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(1, array), [1])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(2, array), [1, 2])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(3, array), [1, 2, 3])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(4, array), [1, 2, 3, 4])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(5, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(6, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(7, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(ImmutableArray.take(77, array), [1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.end()
})
