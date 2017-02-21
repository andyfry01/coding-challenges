const chai = require('chai')
const sinon = require('sinon')

const expect = chai.expect
const assert = chai.assert

const elements = require('./elements')
const PeriodicSpeller = require('./PeriodicSpeller')

describe('#getInput', () => {
  it('should exist', () => {
    let actual = typeof PeriodicSpeller.getInput
    let expected = 'function'
    assert.equal(actual, expected)
  })
  it('should take user input', () => {
    PeriodicSpeller.getInput('test')
    let actual = PeriodicSpeller.userInput
    let expected = 'test'
    assert.equal(actual, expected)
  })
})

describe('#searchElements', () => {
  it('should exist', () => {
    let actual = typeof PeriodicSpeller.searchElements
    let expected = 'function'
    assert.equal(actual, expected)
  })
  it('should loop through the elements array when called', () => {
    let forEachSpy = sinon.spy(Array.prototype, 'forEach')
    forEachSpy.callCount = 0
    PeriodicSpeller.searchElements('test', elements)

    let actual = forEachSpy.callCount
    let expected = 1
    assert.equal(actual, expected)
  })
  it('should check the element symbols against the user input', () => {
    let stringIncludesSpy = sinon.spy(String.prototype, 'includes')
    stringIncludesSpy.callCount = 0
    PeriodicSpeller.searchElements('test', elements)

    let actual = stringIncludesSpy.callCount
    let expected = elements.length
    assert.equal(actual, expected)
  })
  it('should save the element in an array when a match is found', () => {
    PeriodicSpeller.searchElements('ge', elements)
    let actual = PeriodicSpeller.matches
    let expected = [{ number: 32, symbol: 'Ge', name: 'Germanium' }]
    assert.deepEqual(actual, expected)
   })
})

describe('#buildString', () => {
  it('should exist', () => {
    let actual = typeof PeriodicSpeller.buildString
    let expected = 'function'
    assert.equal(actual, expected)
  })
  it('should sort matches based on the input word')

})
