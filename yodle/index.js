/*

Hi Yodle! Here's a Node app to calculate the max sum of adjacent triangle nodes for triangle.txt.
Fun test.

- Andy

*/

var fs = require('fs')

var txtFile = './triangle.txt'

fs.readFile(txtFile, function(err, data){
  var triangleText = data.toString()


  var triangleCalculator = {

    // Stores the max sum for the triangle
    grandTotal: 0,
    triangleArray: [],

    // Reads triangle.txt so we can work with it in the program

    // Locates new lines to differentiate between triangle rows
    findNewLine: function (text) {
      if (/\n+/g.test(text)) {
        console.log("newline found")
        return true
      }
      return false
    },

    // Locates spaces to distinguish between individual numbers
    findSpace: function (text) {
      if (/\s+/.test(text)) {
        console.log("space found")
        return true
      }
      return false
    },

    findNum: function (text) {
      if (/\d+/.test(text)) {
        console.log("number found")
        return true
      }
      return false
    },

    buildTriangleArray: function (triangle) {
      console.log(triangle);
      var triangleLength = triangle.length
      console.log(triangleLength);

      var number = ""
      var rowArray = []

      for (var i = 0; i < triangleLength; i++) {
        console.log(triangle[i]);
        // Each triangle row has two newline characters at the end, hence findNewLine is called for i and i+1
        if (this.findNewLine(triangle[i])) {
            this.triangleArray.push(rowArray)
            rowArray = []
            i += 2
        }
        if (this.findNum(triangle[i])) {
          number += triangle[i]
        }
        if (this.findSpace(triangle[i])) {
          if (number != "") {
            rowArray.push(number)
            number = ""
          }
        }
      }
      console.log(this.triangleArray);
      // fs.writeFile('array.txt', triangleCalculator.triangleArray, function(error){
      //   console.log(error);
      // });
    }

  }

  triangleCalculator.buildTriangleArray(triangleText)

})
