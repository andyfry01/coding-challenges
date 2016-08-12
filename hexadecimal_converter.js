class Number {
  constructor(hexNum) {
    this.hexNum = hexNum
    this.hexDigitArray = []
    this.binary = undefined
    this.isNegative = false
  }

  static parse(number) {
    let hexNum = number.hexNum
    typeof(hexNum) !== "number" ? console.log("Error, you must pass in a hexadecimal value") : null

    if (typeof(hexNum) === "string") {
      number.hexDigitArray = []
      for (let digit in hexNum) {
        if (hexNum[digit] === '-') {
          number.hexDigitArray.push(hexNum[digit])
        } else if (!parseInt(hexNum[digit])) {
          number.hexDigitArray.push(hexNum[digit].toUpperCase())
        } else if (parseInt(hexNum[digit])) {
          number.hexDigitArray.push(hexNum[digit])
        }
      }
    }
  }

  static convert(number) {

    let hexNum = number.hexDigitArray
    let hexMultiplier = undefined
    let binaryConversion = 0

    let hexLetterVals = {
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15
    }

    hexNum[0] === '-' ? hexMultiplier = hexNum.length - 2 : hexMultiplier = hexNum.length - 1

    // Reset data for new conversion
    number.binary = undefined
    number.isNegative = false

    for (let digit in hexNum) {

      // First checks if the digit is an integer or a string.
      // Need to parse the strigified integer before we can perform the conversion
      if (parseInt(hexNum[digit])) {

        let num = parseInt(hexNum[digit])

        if (hexMultiplier === 0) {
          binaryConversion += num
        }
        if (hexMultiplier > 0) {
          binaryConversion += (num * Math.pow(16, hexMultiplier))
          hexMultiplier -= 1
        }
      }

      // If the digit is a letter, we then compare it to the list of hex letter values
      // in the hexLetterVals object and then do the conversion on that value
      if (!parseInt(hexNum[digit])) {

        let letter = hexNum[digit]

        // Checks to see if the input number is negative
        if (letter === '-') {

          number.isNegative = true

        // If it's not, perform conversion
        } else if (letter !== '-') {

          let num = hexLetterVals[letter]
          if (hexMultiplier === 0) {
            binaryConversion += num
          }
          if (hexMultiplier > 0) {
            binaryConversion += (num * Math.pow(16, hexMultiplier))
            hexMultiplier -= 1
          }
        }

      }
    }
    number.isNegative === true ? number.binary = binaryConversion * -1 : number.binary = binaryConversion
    console.log(`The hexadecimal number ${hexNum.join('')} in base 2 is ${number.binary}`);
    
  }

}
