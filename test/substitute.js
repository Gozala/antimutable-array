/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test noop', test => {
  const source = [1, 2, 3, 4, 5]
  const array = source.slice(0)
  const blank = []

  test.equal(AntimutableArray.substitute(2, 0, [], array), array)
  test.deepEqual(array, source)
  test.equal(AntimutableArray.substitute(1, 0, [], array), array)
  test.deepEqual(array, source)
  test.equal(AntimutableArray.substitute(0, 0, [], array), array)
  test.deepEqual(array, source)
  test.equal(AntimutableArray.substitute(-1, 0, [], array), array)
  test.deepEqual(array, source)

  test.equal(AntimutableArray.substitute(0, 1, array, blank), array)
  test.deepEqual(array, source)
  test.deepEqual(blank, [])

  test.end()
})

test('test splice', test => {
  const source = [1, 2, 3, 4, 5]
  const array = source.slice(0)

  test.deepEqual(AntimutableArray.substitute(0, 1, [], array), [2, 3, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 1, [0], array), [0, 2, 3, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 1, [0, 1], array), [0, 1, 2, 3, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 1, [7, 9, 9], array), [7, 9, 9, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.substitute(0, 2, [], array), [3, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 2, [0], array), [0, 3, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 2, [0, 1], array), [0, 1, 3, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 2, [0, 1, 2], array), [0, 1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.substitute(0, 3, [], array), [4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 3, [0], array), [0, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 3, [0, 1], array), [0, 1, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 3, [0, 1, 2], array), [0, 1, 2, 4, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 3, [0, 1, 2, 3], array), [0, 1, 2, 3, 4, 5])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.substitute(0, 4, [], array), [5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 4, [0], array), [0, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 4, [0, 1], array), [0, 1, 5])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 4, [0, 1, 5], array), [0, 1, 5, 5])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.substitute(0, 5, [], array), [])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 5, [1], array), [1])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 5, [1, 7], array), [1, 7])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.substitute(0, 6, [], array), [])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 6, [1], array), [1])
  test.deepEqual(array, source)
  test.deepEqual(AntimutableArray.substitute(0, 6, [1, 7], array), [1, 7])
  test.deepEqual(array, source)

  test.deepEqual(AntimutableArray.substitute(1, 0, [], array), [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 0, [0], array), [1, 0, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 0, [0, 0], array), [1, 0, 0, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 1, [], array), [1, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 1, [0], array), [1, 0, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 1, [0, 0], array), [1, 0, 0, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 2, [], array), [1, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 2, [0], array), [1, 0, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 2, [0, 0], array), [1, 0, 0, 4, 5])
  test.deepEqual(AntimutableArray.substitute(1, 3, [], array), [1, 5])
  test.deepEqual(AntimutableArray.substitute(1, 3, [0], array), [1, 0, 5])
  test.deepEqual(AntimutableArray.substitute(1, 3, [0, 0], array), [1, 0, 0, 5])
  test.deepEqual(AntimutableArray.substitute(1, 4, [], array), [1])
  test.deepEqual(AntimutableArray.substitute(1, 4, [0], array), [1, 0])
  test.deepEqual(AntimutableArray.substitute(1, 4, [0, 0], array), [1, 0, 0])
  test.deepEqual(AntimutableArray.substitute(1, 5, [], array), [1])
  test.deepEqual(AntimutableArray.substitute(1, 5, [0], array), [1, 0])
  test.deepEqual(AntimutableArray.substitute(1, 5, [0, 0], array), [1, 0, 0])
  test.deepEqual(AntimutableArray.substitute(1, 55, [], array), [1])
  test.deepEqual(AntimutableArray.substitute(1, 55, [0], array), [1, 0])
  test.deepEqual(AntimutableArray.substitute(1, 55, [0, 0], array), [1, 0, 0])

  test.deepEqual(AntimutableArray.substitute(2, 0, [], array), [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(2, 0, [0], array), [1, 2, 0, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(2, 0, [0, 0], array), [1, 2, 0, 0, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(2, 1, [], array), [1, 2, 4, 5])
  test.deepEqual(AntimutableArray.substitute(2, 1, [0], array), [1, 2, 0, 4, 5])
  test.deepEqual(AntimutableArray.substitute(2, 1, [0, 0], array), [1, 2, 0, 0, 4, 5])
  test.deepEqual(AntimutableArray.substitute(2, 2, [], array), [1, 2, 5])
  test.deepEqual(AntimutableArray.substitute(2, 2, [0], array), [1, 2, 0, 5])
  test.deepEqual(AntimutableArray.substitute(2, 2, [0, 0], array), [1, 2, 0, 0, 5])
  test.deepEqual(AntimutableArray.substitute(2, 3, [], array), [1, 2])
  test.deepEqual(AntimutableArray.substitute(2, 3, [0], array), [1, 2, 0])
  test.deepEqual(AntimutableArray.substitute(2, 3, [0, 0], array), [1, 2, 0, 0])
  test.deepEqual(AntimutableArray.substitute(2, 4, [], array), [1, 2])
  test.deepEqual(AntimutableArray.substitute(2, 4, [0], array), [1, 2, 0])
  test.deepEqual(AntimutableArray.substitute(2, 4, [0, 0], array), [1, 2, 0, 0])
  test.deepEqual(AntimutableArray.substitute(2, 44, [], array), [1, 2])
  test.deepEqual(AntimutableArray.substitute(2, 44, [0], array), [1, 2, 0])
  test.deepEqual(AntimutableArray.substitute(2, 44, [0, 0], array), [1, 2, 0, 0])

  test.deepEqual(AntimutableArray.substitute(-5, 0, [], array), [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 0, [0], array), [0, 1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 0, [0, 0], array), [0, 0, 1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 1, [], array), [2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 1, [0], array), [0, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 1, [0, 0], array), [0, 0, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 2, [], array), [3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 2, [0], array), [0, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 2, [0, 0], array), [0, 0, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 3, [], array), [4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 3, [0], array), [0, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 3, [0, 0], array), [0, 0, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 4, [], array), [5])
  test.deepEqual(AntimutableArray.substitute(-5, 4, [0], array), [0, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 4, [0, 0], array), [0, 0, 5])
  test.deepEqual(AntimutableArray.substitute(-5, 5, [], array), [])
  test.deepEqual(AntimutableArray.substitute(-5, 5, [0], array), [0])
  test.deepEqual(AntimutableArray.substitute(-5, 5, [0, 0], array), [0, 0])
  test.deepEqual(AntimutableArray.substitute(-5, 55, [], array), [])
  test.deepEqual(AntimutableArray.substitute(-5, 55, [0], array), [0])
  test.deepEqual(AntimutableArray.substitute(-5, 55, [0, 0], array), [0, 0])

  test.deepEqual(AntimutableArray.substitute(-4, 0, [], array), [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-4, 1, [], array), [1, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-4, 2, [], array), [1, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-4, 3, [], array), [1, 5])
  test.deepEqual(AntimutableArray.substitute(-4, 4, [], array), [1])
  test.deepEqual(AntimutableArray.substitute(-4, 5, [], array), [1])
  test.deepEqual(AntimutableArray.substitute(-4, 6, [], array), [1])

  test.deepEqual(AntimutableArray.substitute(-3, 0, [], array), [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-3, 1, [], array), [1, 2, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-3, 2, [], array), [1, 2, 5])
  test.deepEqual(AntimutableArray.substitute(-3, 3, [], array), [1, 2])
  test.deepEqual(AntimutableArray.substitute(-3, 4, [], array), [1, 2])
  test.deepEqual(AntimutableArray.substitute(-3, 44, [], array), [1, 2])

  test.deepEqual(AntimutableArray.substitute(-2, 0, [], array), [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-2, 1, [], array), [1, 2, 3, 5])
  test.deepEqual(AntimutableArray.substitute(-2, 2, [], array), [1, 2, 3])
  test.deepEqual(AntimutableArray.substitute(-2, 3, [], array), [1, 2, 3])
  test.deepEqual(AntimutableArray.substitute(-2, 33, [], array), [1, 2, 3])

  test.deepEqual(AntimutableArray.substitute(-1, 0, [], array), [1, 2, 3, 4, 5])
  test.deepEqual(AntimutableArray.substitute(-1, 1, [], array), [1, 2, 3, 4])
  test.deepEqual(AntimutableArray.substitute(-1, 2, [], array), [1, 2, 3, 4])
  test.deepEqual(AntimutableArray.substitute(-1, 22, [], array), [1, 2, 3, 4])

  test.end()
})
