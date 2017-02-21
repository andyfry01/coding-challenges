const chai = require('chai')
const sinon = require('sinon')

const expect = chai.expect
const assert = chai.assert

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
  
})
