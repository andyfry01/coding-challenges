const hexConverter = {

  data: {
    hexArray: [],
    isNegative: false,
    binary: undefined
  },

  hexLetterVals: {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  },

  parseHex: function(hex) {

    typeof(hex) === "number" ? console.log("Error, you must pass in a hexadecimal value") : null
    if (typeof(hex) === "string") {
      this.data.hexArray = []
      for (val in hex) {
        if (hex[val] === '-') {
          this.data.hexArray.push(hex[val])
        } else if (!parseInt(hex[val])) {
          this.data.hexArray.push(hex[val].toUpperCase())
        } else if (parseInt(hex[val])) {
          this.data.hexArray.push(hex[val])
        }
      }
    }
  },

  convertHex: function(hex) {

    let hexMultiplier = undefined

    hex[0] === '-' ? hexMultiplier = hex.length - 2 : hexMultiplier = hex.length - 1

    let hexConversion = 0

    // Reset data for new conversion
    this.data.binary = undefined
    this.data.isNegative = false

    for (val in hex) {

      // First checks if the digit is an integer or a string.
      // Need to parse the strigified integer before we can perform the conversion
      if (parseInt(hex[val])) {

        let num = parseInt(hex[val])

        if (hexMultiplier === 0) {
          hexConversion += num
        }
        if (hexMultiplier > 0) {
          hexConversion += (num * Math.pow(16, hexMultiplier))
          hexMultiplier -= 1
        }
      }

      // If the digit is a letter, we then compare it to the list of hex letter values
      // in the hexLetterVals object and then do the conversion on that value
      if (!parseInt(hex[val])) {

        let letter = hex[val]

        // Checks to see if the input number is negative
        if (letter === '-') {

          this.data.isNegative = true

        // If it's not, perform conversion
        } else if (letter !== '-') {

          let num = this.hexLetterVals[letter]
          if (hexMultiplier === 0) {
            hexConversion += num
          }
          if (hexMultiplier > 0) {
            hexConversion += (num * Math.pow(16, hexMultiplier))
            hexMultiplier -= 1
          }
        }

      }
    }
    this.data.isNegative === true ? this.data.binary = hexConversion * -1 : this.data.binary = hexConversion
    console.log(`The hexadecimal number ${hex.join('')} in base 2 is ${this.data.binary}`);
  }

}
