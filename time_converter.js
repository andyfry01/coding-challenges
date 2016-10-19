'use-strict'

// Using the JavaScript language, take a num parameter
// and return the number of hours and minutes the parameter
// converts to (ie. if num = 63 then the output should be 1:3).
// Separate the number of hours and minutes with a colon.

class TimeConverter {

  constructor(num) {
    this.num = num
  }

  // Called by findHours, chops everything off the num following the decimal
  // to find the number of whole hours
  chopDecimal(num) {
    let stringifiedNum = num.toString(10)
    let numWithoutDecimal = ''
    for (let digit in stringifiedNum) {
      if (stringifiedNum[digit] === '.') {
        return parseInt(numWithoutDecimal)
      } else if (stringifiedNum[digit] !== '.') {
        numWithoutDecimal += stringifiedNum[digit]
      }
    }
    return parseInt(numWithoutDecimal)
  }

  // Finds number of whole hours
  findHours(num) {
    return this.chopDecimal(num / 60)
  }

  // Finds number of minutes
  findMinutes(num) {
    if (num % 60 > 0) {
      return num % 60
    } else {
      return 0
    }
  }  

  convert() {
    return console.log(`${this.num} minutes converted into hours and minutes is ${this.findHours(this.num)}:${this.findMinutes(this.num)}`)
  }

}
