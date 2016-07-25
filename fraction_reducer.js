const TEST_INPUT = [
  [4, 8],
  [1536, 78360],
  [51478, 5536],
  [46410, 119340],
  [7673, 4729],
  [4096, 1024]
]

const EXPECTED_OUTPUT = [
  [1, 2]
  [64, 3265],
  [25739, 2768],
  [7, 18],
  [7673, 4729],
  [4, 1]
]

const FRACTION_REDUCER = {

  data: {
    resultArray: [],
    divisors: []
  },

  reduce: function(array) {

    for (let i = 0; i < array.length; i++) {

      let divisor = undefined
      let dividend = undefined

      if (array[i][0] > array[i][1]) {
        dividend = array[i][0]
        divisor = array[i][1]
      } else {
        dividend = array[i][1]
        divisor = array[i][0]
      }

      this.moduloize(dividend, divisor)
      let GCD = this.data.divisors[i]
      let reducedFraction = new Array(array[i][0] / GCD, array[i][1] / GCD)
      console.log(reducedFraction);
      this.data.resultArray.push(reducedFraction)

    }

    TESTS.testFxnOutput(this.data.resultArray, EXPECTED_OUTPUT)
  },

  moduloize: function(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor)
    let remainder = dividend % divisor
    if (remainder === 0) {
      this.data.divisors.push(divisor)
    } else {
      let newDividend = divisor
      this.moduloize(newDividend, remainder)
    }
  }
}


const TESTS = {
  testFxnOutput: function(fxnOutput, expectedOutput) {
    if (fxnOutput !== expectedOutput) {
      console.error("Error, function produced incorrect output.", fxnOutput, expectedOutput);
    } else {
      console.log("Success! Here are your reduced fractions:", fxnOutput)
    }
  }
}
