/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test drop 0', test => {
  const source = [1, 2, 3]
  test.equal(ImmutableArray.drop(0, source) === source, true)
  test.deepEqual(source, [1, 2, 3])

  test.end()
})

test('test drop -4', test => {
  const source = [1, 2, 3]
  test.equal(ImmutableArray.drop(-4, source) === source, true)
  test.deepEqual(source, [1, 2, 3])

  test.end()
})

test('test drop 1', test => {
  const source = [1, 2, 3]
  test.equal(ImmutableArray.drop(1, source) === source, false)
  test.deepEqual(source, [1, 2, 3])
  test.deepEqual(ImmutableArray.drop(1, source), [2, 3])

  test.end()
})

test('test drop all', test => {
  const source = [1, 2, 3, 4]
  test.equal(ImmutableArray.drop(4, source) === source, false)
  test.deepEqual(source, [1, 2, 3, 4])
  test.deepEqual(ImmutableArray.drop(4, source), [])

  test.end()
})

test('test drop more than available', test => {
  const source = [1, 2]
  test.equal(ImmutableArray.drop(4, source) === source, false)
  test.deepEqual(source, [1, 2])
  test.deepEqual(ImmutableArray.drop(4, source), [])

  test.end()
})
