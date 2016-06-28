// Given a certain amount of currency in dollars, make change in American coinage. Indicate
// the number of quarters, dimes, nickels and pennies returned.

// Version two: cleaner, more efficient code.

var cash = 35.16
coinVals: [50, 25, 10, 5, 1];

var changeMaker = {

  numPennies: undefined,
  coinTotals: {},

  cashConverter: function(value) {
    // counts number of digits in cash value to determine radix, subtracting one to disregard the decimal
    var numDigits = value.toString().length - 1
    var pennyConversion = value * 100
    // parses the penny conversion to get the proper number of pennies, and then converts it into a
    // float so we can do math on it
    this.numPennies = parseInt(parseFloat(pennyConversion).toPrecision(numDigits))
  },
  coinTotalBuilder: function(coinVals) {
    for (var i = 0; i < coinVals.length; i++) {
      this.coinTotals[i] = {
        coinValue: coinVals[i],
        total: 0
      }
    }
  }

}
