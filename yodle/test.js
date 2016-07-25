var fs = require('fs')

var txtFile = './testTriangle.txt'
fs.readFile(txtFile, function(err, data){
  var triangleText = data.toString()

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
  var test = function(triangleArray) {

    for (var i = 0; i < triangleArray.length; i++) {
      for (var j = 0; j < triangleArray[i].length; j++ ) {
        console.log(triangleArray[i][j]);
        if (triangleArray[i][j] == triangleArray[i][j+1]) {
          console.log("adjacent nums found");
        }
      }
    }
    console.log("no adjacent nums found");
  }

  triangleParser.buildTriangleArray(triangleText)

  test(data.triangleArray)



})
