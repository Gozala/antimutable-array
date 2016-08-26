/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test first', test => {
  test.equal(AntimutableArray.first([]) == null, true)
  test.equal(AntimutableArray.first([1]), 1)
  test.equal(AntimutableArray.first([1, 2]), 1)
  test.end()
})

test('test last', test => {
  test.equal(AntimutableArray.last([]) == null, true)
  test.equal(AntimutableArray.last([1]), 1)
  test.equal(AntimutableArray.last([1, 2]), 2)
  test.end()
})

test('test get from head', test => {
  test.equal(AntimutableArray.get(0, []) == null, true)
  test.equal(AntimutableArray.get(1, []) == null, true)
  test.equal(AntimutableArray.get(17, []) == null, true)
  test.equal(AntimutableArray.get(0, [1]), 1)
  test.equal(AntimutableArray.get(1, [1]) == null, true)
  test.equal(AntimutableArray.get(2, [1]) == null, true)
  test.equal(AntimutableArray.get(23, [1]) == null, true)
  test.equal(AntimutableArray.get(0, [1, 2]), 1)
  test.equal(AntimutableArray.get(1, [1, 2]), 2)
  test.equal(AntimutableArray.get(2, [1, 2]) == null, true)
  test.equal(AntimutableArray.get(82, [1, 2]) == null, true)
  test.end()
})

test('test get from tail', test => {
  test.equal(AntimutableArray.get(-1, []) == null, true)
  test.equal(AntimutableArray.get(-2, []) == null, true)
  test.equal(AntimutableArray.get(-17, []) == null, true)
  test.equal(AntimutableArray.get(-1, [1]), 1)
  test.equal(AntimutableArray.get(-2, [1]) == null, true)
  test.equal(AntimutableArray.get(-3, [1]) == null, true)
  test.equal(AntimutableArray.get(-23, [1]) == null, true)
  test.equal(AntimutableArray.get(-1, [1, 2]), 2)
  test.equal(AntimutableArray.get(-2, [1, 2]), 1)
  test.equal(AntimutableArray.get(-3, [1, 2]) == null, true)
  test.equal(AntimutableArray.get(-82, [1, 2]) == null, true)
  test.end()
})
