/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test insert empty', test => {
  const source = [1, 2, 3]

  test.equal(ImmutableArray.insert(0, [], source) === source, true)
  test.deepEqual(source, [1, 2, 3])
  test.equal(ImmutableArray.insert(110, [], source) === source, true)
  test.deepEqual(source, [1, 2, 3])
  test.equal(ImmutableArray.insert(-2, [], source) === source, true)
  test.deepEqual(source, [1, 2, 3])
  test.equal(ImmutableArray.insert(1, [], source) === source, true)
  test.deepEqual(source, [1, 2, 3])
  test.equal(ImmutableArray.insert(-1, [], source) === source, true)
  test.deepEqual(source, [1, 2, 3])

  test.end()
})

test('test insert from head', test => {
  const source = [1, 2, 3]
  const insert = [4, 5]

  test.deepEqual(ImmutableArray.insert(0, insert, source), [4, 5, 1, 2, 3])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.deepEqual(ImmutableArray.insert(1, insert, source), [1, 4, 5, 2, 3])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.deepEqual(ImmutableArray.insert(2, insert, source), [1, 2, 4, 5, 3])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.deepEqual(ImmutableArray.insert(3, insert, source), [1, 2, 3, 4, 5])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.deepEqual(ImmutableArray.insert(4, insert, source), [1, 2, 3, 4, 5])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.end()
})

test('test instert into head of empty', test => {
  const source = []
  const insert = [7, 19]

  test.equal(ImmutableArray.insert(0, insert, source) === insert, true)
  test.deepEqual(source, [])
  test.deepEqual(insert, [7, 19])

  test.end()
})

test('test insert at the end', test => {
  const source = [1, 2, 3]
  const insert = [4, 5]

  test.deepEqual(ImmutableArray.insert(source.length, insert, source), [1, 2, 3, 4, 5])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.end()
})

test('test insert from tail', test => {
  const source = [1, 2, 3]
  const insert = [4, 5]

  test.deepEqual(ImmutableArray.insert(-1, insert, source), [1, 2, 4, 5, 3])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.deepEqual(ImmutableArray.insert(-2, insert, source), [1, 4, 5, 2, 3])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.deepEqual(ImmutableArray.insert(-3, insert, source), [4, 5, 1, 2, 3])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.deepEqual(ImmutableArray.insert(-4, insert, source), [4, 5, 1, 2, 3])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.deepEqual(ImmutableArray.insert(-41, insert, source), [4, 5, 1, 2, 3])
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(insert, [4, 5])

  test.end()
})
