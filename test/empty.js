/* @flow */

import * as AntimutableArray from '../'
import test from 'tape'

test('test empty', test => {
  test.equal(AntimutableArray.empty === AntimutableArray.empty, true)
  test.deepEqual(AntimutableArray.empty, [])

  try {
    AntimutableArray.empty.push(5)
  } catch (error) {

  }

  test.deepEqual(AntimutableArray.empty, [])

  test.end()
})
