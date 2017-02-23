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
    forEachSpy.restore()
  })
  it('should check the element symbols against the user input', () => {
    let stringIncludesSpy = sinon.spy(String.prototype, 'includes')
    stringIncludesSpy.callCount = 0
    PeriodicSpeller.searchElements('test', elements)

    let actual = stringIncludesSpy.callCount
    let expected = elements.length
    assert.equal(actual, expected)
    stringIncludesSpy.restore()
  })
  it('should save the element in an array when a match is found', () => {
    let actual = PeriodicSpeller.searchElements('Ge', elements)
    let expected = [{ number: 32, symbol: 'Ge', name: 'Germanium' }]
    assert.deepEqual(actual, expected)
   })
})

describe('sortMatches', () => {
  describe('#byInputString', () => {
    it('should exist', () => {
      let actual = typeof PeriodicSpeller.sortMatches.byInputString
      let expected = 'function'
      assert.equal(actual, expected)
    })
    it('should return an array sorted according to the input string', () => {
      let unsortedMatches = [
        { number: 7, symbol: 'N', name: 'Nitrogen' },
        { number: 16, symbol: 'S', name: 'Sulfur' },
        { number: 28, symbol: 'Ni', name: 'Nickel' },
        { number: 32, symbol: 'Ge', name: 'Germanium' },
        { number: 53, symbol: 'I', name: 'Iodine' },
        { number: 92, symbol: 'U', name: 'Uranium' }
      ]
      let inputString = "genius"

      let actual = PeriodicSpeller.sortMatches.byInputString(unsortedMatches, inputString)
      let expected = [
        { number: 32, symbol: 'Ge', name: 'Germanium' },
        { number: 7, symbol: 'N', name: 'Nitrogen' },
        { number: 28, symbol: 'Ni', name: 'Nickel' },
        { number: 53, symbol: 'I', name: 'Iodine' },
        { number: 92, symbol: 'U', name: 'Uranium' },
        { number: 16, symbol: 'S', name: 'Sulfur' }
      ]
      assert.deepEqual(actual, expected)
    })
  })
})

describe('#buildString', () => {
  it('should exist', () => {
    let actual = typeof PeriodicSpeller.buildString
    let expected = 'function'
    assert.equal(actual, expected)
  })
  it('should return the input spelled with element symbols along with the element names', () => {
    let sortedArray = [
      { number: 22, symbol: 'Ti', name: 'Titanium' },
      { number: 53, symbol: 'I', name: 'Iodine' },
      { number: 6, symbol: 'C', name: 'Carbon' },
      { number: 19, symbol: 'K', name: 'Potassium' },
      { number: 3, symbol: 'Li', name: 'Lithium' },
      { number: 16, symbol: 'S', name: 'Sulfur' },
      { number: 1, symbol: 'H', name: 'Hydrogen' }
    ]
    let actual = PeriodicSpeller.buildString(sortedArray, 'ticklish')
    let expected = 'TiCKLiSH (Titanium) (Carbon) (Potassium) (Lithium) (Sulfur) (Hydrogen) '
    assert.equal(actual, expected)
  })
})
