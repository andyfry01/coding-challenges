var assert = require('assert')
var chai = require('chai')
var sinon = require('sinon')
var expect = chai.expect
var assert = chai.assert

const ArrayFlattener = require('./ArrayFlattener.js')


describe('arrayFlattener()', () => {
  it('Should exist', () => {
    let actual = typeof ArrayFlattener.flatten
    let expected = 'function'
    assert.equal(actual, expected)
  })

  it('Should call checkForArray', () => {
    let testArray = [1,2,3,4,5]
    let checkForArraySpy = sinon.spy(ArrayFlattener, 'checkForArray')
    checkForArraySpy.callCount = 0
    ArrayFlattener.flatten(testArray)

    let actual = checkForArraySpy.callCount
    let expected = testArray.length
    assert.equal(actual, expected)
  })
  it('Should return a flattened array if passed a flattened array', () => {
    let testArray = [1,2,3,4,5]
    function testFxn(array) { return ArrayFlattener.flatten(array) }
    let actual = testFxn(testArray)
    let expected = testArray
    assert.deepEqual(actual, expected)
  })
})

describe('checkForArray()', () => {
  it('Should exist', () => {
    let actual = typeof ArrayFlattener.checkForArray
    let expected = 'function'
    assert.equal(actual, expected)
  });
  it('Should return true when it does not find a non-array item in an array', () => {
    let actual = ArrayFlattener.checkForArray(1)
    let expected = true
    assert.equal(actual, expected)
  })
  it('Should return false when it finds an array item in an array', () => {
    let actual = ArrayFlattener.checkForArray([[1]])
    let expected = false
    assert.equal(actual, expected)
  })
})
