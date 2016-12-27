var assert = require('assert')
var TimeConverter = require('../time_converter.js')

describe('test', function(){
  it('Should return an object when instantiated', function(){
    var converter = new TimeConverter(69)
    var actual = typeof(converter)
    var expected = typeof({})
    assert.equal(actual, expected, 'timeConverter is an object')
  })
  it('Should log an error message when instantiated without a num argument', function(){
    var converter = new TimeConverter()
    var actual = 'Error: the string "Num parameter is undefined" was thrown, throw an Error :)'
    assert.equal(actual, expected, 'TimeConverter returns an error when instantiated without a num')
  })
  // it('Should log an error when instantiated with any data type that\'s not an integer', function(){
  //   var stringConverter = new TimeConverter('hey')
  //   var boolConverter = new TimeConverter(true)
  //   var arrayConverter = new TimeConverter([1, 2])
  //   var objConverter = new TimeConverter({test: '1-2-3'})
  // })
  // it('Should convert the num value into the correct number of hours', function(){})
  // it('Should convert the num value into the correct number of minutes', function(){})
  // it('Should log something when convert is called', function(){})
  // it('Should return the correct conversion when called', function(){})


  // it('Should', function(){})
  // it('Should', function(){})
  // it('Should', function(){})
})
