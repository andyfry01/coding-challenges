/*

Hi Yodle! Here's a Node app to calculate the max sum of adjacent triangle nodes for triangle.txt.
Fun test.

- Andy

*/

var fs = require('fs')

var txtFile = './triangle.txt'

fs.readFile(txtFile, function(err, data){
  var triangleText = data.toString()


  var triangleParser = {

    // Stores the max sum for the triangle
    grandTotal: 0,
    triangleArray: [],

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
            this.triangleArray.push(rowArray)
            rowArray = []
            numIndex = 0
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
      triangleCalculator.doMath(this.triangleArray)
    }
  }


  var triangleCalculator = {

    // Checks index of nodes in triangle row for doMath fxn
    checkIndex: function(triangleNode) {
      if (triangleNode - 1 === undefined) {
        return true
      }
      return false
    },

    // Performs calculation on triangle array to find max sum
    doMath: function(triangleArray) {
      var arrayLength = triangleArray.length
      var runningTotal = 0

      var startNum = triangleArray[0][0]

      var currentNode = startNum
      var firstNum = undefined
      var secondNum = undefined

      runningTotal += currentNode.number

      for (var i = 1; i < arrayLength; i++) {

        console.log("the current node is", currentNode);

        firstNum = triangleArray[i][currentNode.index]
        secondNum = triangleArray[i][currentNode.index + 1]

        console.log("firstNum:", firstNum, "secondNum", secondNum);

        if (firstNum.number > secondNum.number) {
          runningTotal += firstNum.number
          currentNode = firstNum
        } else if (firstNum.number < secondNum.number) {
          runningTotal += secondNum.number
          currentNode = secondNum
        }
      }
      console.log(runningTotal)
    }
  }
  triangleParser.buildTriangleArray(triangleText)
})
