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

    let hexLen = hex.length
    let hexMultiplier = hex.length - 1
    let hexConversion = 0
    let loops = 0;

    for (val in hex) {

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
  }
}
