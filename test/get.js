/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test first', test => {
  test.equal(ImmutableArray.first([]) == null, true)
  test.equal(ImmutableArray.first([1]), 1)
  test.equal(ImmutableArray.first([1, 2]), 1)
  test.end()
})

test('test last', test => {
  test.equal(ImmutableArray.last([]) == null, true)
  test.equal(ImmutableArray.last([1]), 1)
  test.equal(ImmutableArray.last([1, 2]), 2)
  test.end()
})

test('test get from head', test => {
  test.equal(ImmutableArray.get(0, []) == null, true)
  test.equal(ImmutableArray.get(1, []) == null, true)
  test.equal(ImmutableArray.get(17, []) == null, true)
  test.equal(ImmutableArray.get(0, [1]), 1)
  test.equal(ImmutableArray.get(1, [1]) == null, true)
  test.equal(ImmutableArray.get(2, [1]) == null, true)
  test.equal(ImmutableArray.get(23, [1]) == null, true)
  test.equal(ImmutableArray.get(0, [1, 2]), 1)
  test.equal(ImmutableArray.get(1, [1, 2]), 2)
  test.equal(ImmutableArray.get(2, [1, 2]) == null, true)
  test.equal(ImmutableArray.get(82, [1, 2]) == null, true)
  test.end()
})

test('test get from tail', test => {
  test.equal(ImmutableArray.get(-1, []) == null, true)
  test.equal(ImmutableArray.get(-2, []) == null, true)
  test.equal(ImmutableArray.get(-17, []) == null, true)
  test.equal(ImmutableArray.get(-1, [1]), 1)
  test.equal(ImmutableArray.get(-2, [1]) == null, true)
  test.equal(ImmutableArray.get(-3, [1]) == null, true)
  test.equal(ImmutableArray.get(-23, [1]) == null, true)
  test.equal(ImmutableArray.get(-1, [1, 2]), 2)
  test.equal(ImmutableArray.get(-2, [1, 2]), 1)
  test.equal(ImmutableArray.get(-3, [1, 2]) == null, true)
  test.equal(ImmutableArray.get(-82, [1, 2]) == null, true)
  test.end()
})
