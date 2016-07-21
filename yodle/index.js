/*

Hi Yodle! Here's a Node app to calculate the max sum of adjacent triangle nodes for triangle.txt.
Fun test.

- Andy

*/

var fs = require('fs')

var txtFile = './triangle.txt'

fs.readFile(txtFile, function(err, data){
  var triangleText = data.toString()

  // Stores the max sum for the triangle and the triangle array built by triangleParser
  var data = {
    grandTotal: 0,
    triangleArray: []
  }

  var triangleParser = {

    // Locates new lines to differentiate between triangle rows
    findNewLine: function (text) {
      if (/\n+/g.test(text)) {
        return true
      }
      return false
    },

    // Locates spaces to distinguish between individual numbers
    findSpace: function (text) {
      if (/\s+/.test(text)) {
        return true
      }
      return false
    },

    // Locates numbers
    findNum: function (text) {
      if (/\d+/.test(text)) {
        return true
      }
      return false
    },

    // Builds a hash table of triangle rows from the txt file
    buildTriangleArray: function (triangle) {
      var triangleLength = triangle.length

      var number = ""
      var numIndex = 0
      var rowArray = []

      for (var i = 0; i < triangleLength; i++) {
        if (this.findNewLine(triangle[i])) {
            data.triangleArray.push(rowArray)
            rowArray = []
            numIndex = 0
            // There are two newline characters at the end of each row, hence i += 1
            i += 1
        }
        if (this.findNum(triangle[i])) {
          number += triangle[i]
        }
        if (this.findSpace(triangle[i])) {
          if (number != "") {
            rowArray.push({number: parseInt(number), index: numIndex})
            numIndex += 1
            number = ""
          }
        }
      }
    }
  }


  var triangleCalculator = {

    // Performs calculation on triangle array to find max sum
    doMath: function(triangleArray) {
      var arrayLength = triangleArray.length
      var runningTotal = 0

      var startNum = triangleArray[0][0]

      var currentNode = startNum
      var firstNode = undefined
      var secondNode = undefined

      runningTotal += currentNode.number

      for (var i = 1; i < arrayLength; i++) {

        firstNode = triangleArray[i][currentNode.index]
        secondNode = triangleArray[i][currentNode.index + 1]

        // I'm assuming that there are no adjacent numbers in any row that are equal to each other.
        if (firstNode.number > secondNode.number) {
          runningTotal += firstNode.number
          currentNode = firstNode
        } else if (firstNode.number < secondNode.number) {
          runningTotal += secondNode.number
          currentNode = secondNode
        }
      }
      this.grandTotal = runningTotal
      console.log("The maximum sum of the triangle is", this.grandTotal)
    }
  }

  triangleParser.buildTriangleArray(triangleText)
  triangleCalculator.doMath(data.triangleArray)

})
