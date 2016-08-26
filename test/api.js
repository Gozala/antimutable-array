/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test exports', test => {
  test.isEqual(isObject(ImmutableArray), true)
  test.isEqual(isFunction(ImmutableArray.drop), true)
  test.isEqual(isFunction(ImmutableArray.empty), true)
  test.isEqual(isFunction(ImmutableArray.get), true)
  test.isEqual(isFunction(ImmutableArray.insert), true)
  test.isEqual(isFunction(ImmutableArray.move), true)
  test.isEqual(isFunction(ImmutableArray.push), true)
  test.isEqual(isFunction(ImmutableArray.remove), true)
  test.isEqual(isFunction(ImmutableArray.reverse), true)
  test.isEqual(isFunction(ImmutableArray.set), true)
  test.isEqual(isFunction(ImmutableArray.slice), true)
  test.isEqual(isFunction(ImmutableArray.sort), true)
  test.isEqual(isFunction(ImmutableArray.sortBy), true)
  test.isEqual(isFunction(ImmutableArray.substitute), true)
  test.isEqual(isFunction(ImmutableArray.take), true)
  test.isEqual(isFunction(ImmutableArray.unshift), true)
  test.isEqual(isFunction(ImmutableArray.first), true)
  test.isEqual(isFunction(ImmutableArray.last), true)
  test.isEqual(isFunction(ImmutableArray.append), true)
  test.isEqual(isFunction(ImmutableArray.concat), true)
  test.end()
})

const isObject =
  value =>
  value != null && typeof (value) === 'object'

const isFunction =
  value =>
  typeof (value) === 'function'
