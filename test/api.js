/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test exports', test => {
  test.isEqual(isObject(AntimutableArray), true)
  test.isEqual(isFunction(AntimutableArray.drop), true)
  test.isEqual(isArray(AntimutableArray.empty), true)
  test.isEqual(isFunction(AntimutableArray.get), true)
  test.isEqual(isFunction(AntimutableArray.insert), true)
  test.isEqual(isFunction(AntimutableArray.move), true)
  test.isEqual(isFunction(AntimutableArray.push), true)
  test.isEqual(isFunction(AntimutableArray.remove), true)
  test.isEqual(isFunction(AntimutableArray.reverse), true)
  test.isEqual(isFunction(AntimutableArray.set), true)
  test.isEqual(isFunction(AntimutableArray.slice), true)
  test.isEqual(isFunction(AntimutableArray.sort), true)
  test.isEqual(isFunction(AntimutableArray.sortBy), true)
  test.isEqual(isFunction(AntimutableArray.substitute), true)
  test.isEqual(isFunction(AntimutableArray.take), true)
  test.isEqual(isFunction(AntimutableArray.unshift), true)
  test.isEqual(isFunction(AntimutableArray.first), true)
  test.isEqual(isFunction(AntimutableArray.last), true)
  test.isEqual(isFunction(AntimutableArray.append), true)
  test.isEqual(isFunction(AntimutableArray.concat), true)
  test.end()
})

const isObject =
  value =>
  value != null && typeof (value) === 'object'

const isFunction =
  value =>
  typeof (value) === 'function'

const isArray =
  value =>
  Object.prototype.toString.call(value) === '[object Array]'
