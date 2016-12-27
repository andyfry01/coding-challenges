var assert = require('assert')
var chai = require('chai')
var expect = chai.expect
var assert = chai.assert

var TimeConverter = require('../time_converter.js')

describe('test', function(){
  it('Should return an object when instantiated', function(){
    var converter = new TimeConverter(69)
    var actual = typeof(converter)
    var expected = typeof({})
    assert.equal(actual, expected, 'TimeConverter is an object')
  })

  it('Should log an error message when instantiated without a num argument', function(){
    var expected = 'Num parameter is undefined'
    expect(() => { new TimeConverter() }).to.throw(expected)
  })

  it('Should log an error when instantiated with any data type that\'s not a number', function(){

    var expected = 'Num parameter must be a number'

    expect(() => { new TimeConverter('hey') }).to.throw(expected)
    expect(() => { new TimeConverter(true) }).to.throw(expected)
    expect(() => { new TimeConverter([1, 2]) }).to.throw(expected)
    expect(() => { new TimeConverter({test: '1-2-3'}) }).to.throw(expected)
    
  })


  // it('Should convert the num value into the correct number of hours', function(){})
  // it('Should convert the num value into the correct number of minutes', function(){})
  // it('Should log something when convert is called', function(){})
  // it('Should return the correct conversion when called', function(){})


  // it('Should', function(){})
  // it('Should', function(){})
  // it('Should', function(){})
})
