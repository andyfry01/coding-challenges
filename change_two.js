// Given a certain amount of currency in dollars, make change in American coinage. Indicate
// the number of quarters, dimes, nickels and pennies returned.

// Version two: cleaner, more efficient code. Object oriented.

var cash = 35.16,
    coinVals = [50, 25, 10, 5, 1];

var coinCounter = {

  numPennies: undefined,
  coinTotals: {},

  cashConverter: function(value) {
    // counts number of digits in cash value to determine radix, subtracting one to disregard the decimal
    if (testSuite.testCash(value)) {
      var numDigits = value.toString().length - 1
      var pennyConversion = value * 100
      // parses the penny conversion to get the proper number of pennies, and then converts it into a
      // float so we can do math on it
      this.numPennies = parseInt(parseFloat(pennyConversion).toPrecision(numDigits))
    } else {
      return "Invalid cash value, please enter a valid cash value (e.g 13.75 or 101)."
    }
  },

  // Builds the coinTotals object so we can store the coin values we have and how many of each.
  coinTotalBuilder: function(coinVals) {
    for (var i = 0; i < coinVals.length; i++) {
      this.coinTotals[i] = {
        coinValue: coinVals[i],
        total: 0
      }
    }
  },

  // Takes the number of pennies and the coin values, and returns the correct amount of change.
  makeChange: function(value, coinVals) {
    var coinValsLen = coinVals.length;
    for (var i = 0; i < coinValsLen; i++) {
      if (value / coinVals[i] > 0) {
        this.coinTotals[i].total = Math.floor(value / coinVals[i])
        value = value % coinVals[i]
      }
    }
    return this.coinTotals
  }

}

// Testing functions

var testSuite = {
  //test whether cash value is > 0 and number of digits behind decimal is > 2
  testCash: function(cashVar) {
    var decimalTest = /[.]\d{3}/g.test(cashVar)
    if (cashVar > 0) {
      return true;
    }
    if (decimalTest) {
      return false;
    }
    return false;
  }
}
