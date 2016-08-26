/* @flow */

import * as ImmutableArray from '../'
import test from 'tape'

test('test empty', test => {
  test.equal(ImmutableArray.empty() === ImmutableArray.empty(), true)
  test.deepEqual(ImmutableArray.empty(), [])

  try {
    ImmutableArray.empty().push(5)
  } catch (error) {

  }

  test.deepEqual(ImmutableArray.empty(), [])

  test.end()
})
