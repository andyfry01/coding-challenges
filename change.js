// Given a certain amount of currency in dollars, make change in American coinage. Indicate
// the number of quarters, dimes, nickels and pennies returned.



// Version one: lots of if statements. It works, but isn't very DRY, and can be refactored to be more efficient. 

var cash = 1.57

function makeChange (amount) {

  // converts dollars and cents to number of pennies.
  var coinVal = amount * 100;

  var coinCount = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  if (coinVal % 25 >= 0) {
    var numQuarters = Math.floor(coinVal / 25)
    var quartersValue = numQuarters * 25
    coinCount.quarters = numQuarters
    coinVal -= quartersValue
  }

  if (coinVal % 10 >= 0) {
    var numDimes = Math.floor(coinVal / 10)
    var dimesValue = numDimes * 10
    coinCount.dimes = numDimes
    coinVal -= dimesValue
  }

  if (coinVal % 5 >= 0) {
    var numNickels = Math.floor(coinVal / 5)
    var nickelsValue = numNickels * 5
    coinCount.nickels = numNickels
    coinVal -= nickelsValue
  }

  if (coinVal > 0) {
    coinCount.pennies = coinVal
    coinVal = 0;
  }

  console.log(coinCount);
  console.log(coinVal);

}
