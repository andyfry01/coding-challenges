const TEST_INPUT = [
  [4, 8],
  [1536, 78360],
  [51478, 5536],
  [46410, 119340],
  [7673, 4729],
  [4096, 1024]
]

const EXPECTED_OUTPUT = [
  [1, 2],
  [64, 3265],
  [25739, 2768],
  [7, 18],
  [7673, 4729],
  [4, 1]
]

const FRACTION_REDUCER = {

  data: {
    resultArray: []
  },

  reduce: function(array) {

    for (let [numOne, numTwo] of array) {

      let divisor = undefined
      let dividend = undefined

      if (numOne > numTwo) {
        dividend = numOne
        divisor = numTwo
      } else {
        dividend = numTwo
        divisor = numOne
      }

      // GCD = greatest common denominator
      let GCD = this.findDenominator(dividend, divisor)
      let reducedFraction = new Array(numOne / GCD, numTwo / GCD)
      this.data.resultArray.push(reducedFraction)

    }

    TESTS.testFxnOutput(this.data.resultArray, EXPECTED_OUTPUT)
  },

  findDenominator: function(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor)
    let remainder = dividend % divisor
    if (remainder === 0) {
      return divisor
    } else {
      let newDividend = divisor
      return this.findDenominator(newDividend, remainder)
    }
  }
}


const TESTS = {

  testFxnOutput: function(fxnOutput, expectedOutput) {
    let error = false
    for (let [numOne, numTwo] of fxnOutput) {
      if (fxnOutput.numOne !== expectedOutput.numOne) {
        error = true
      }
      if (fxnOutput.numTwo !== expectedOutput.numTwo) {
        error = true
      }
    }

    if (error) {
      console.error("Error, function produced incorrect result.");
      console.log("Output of function:");
      console.table(fxnOutput);
      console.log("Expected output of function:");
      console.table(expectedOutput);
    }
    if (!error) {
      console.log("Success! Fractions successfully reduced.");
      console.log(FRACTION_REDUCER.data.resultArray);
    }

  }
}
