const hexConverter = {

  data: {
    hexArray: [],
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
      for (val in hex) {
        this.data.hexArray.push(hex[val])
      }
    }
  },

  convertHex: function(hex) {

    let hexMultiplier = hex.length - 1
    let hexConversion = 0

    for (val in hex) {

      // First checks if the digit is an integer or a string.
      // Need to parse the strigified integer before we can perform the calculations
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
      // in the hexLetterVals object and then do the calculations on that value
      if (!parseInt(hex[val])) {

        let letter = hex[val]
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
    this.data.binary = hexConversion
    console.log(`The hexadecimal number ${hex.join('')} in base 2 is ${this.data.binary}`);
  }

}
