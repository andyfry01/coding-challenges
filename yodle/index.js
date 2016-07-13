/*

Hi Yodle! Here's a Node app to calculate the max sum of adjacent triangle nodes for triangle.txt.
Please note that I tried to keep the program efficient in that I kept new data structures to a minimum (no arrays or objects, for example).

Fun test.

- Andy

*/

var fs = require('fs')

var txtFile = './triangle.txt'

var triangleCalculator = {

  // Stores the max sum for the triangle
  grandTotal: 0,

  // Reads triangle.txt so we can work with it in the program
  readTriangleTXT: fs.readFile(txtFile, function(err, data){
    var text = data.toString()
  }),

  // Locates new lines to differentiate between triangle rows
  findNewLine: function (text) {
    if (/\n+/g.test(text)) {
      console.log("newline found");
    }
  },

  // Locates spaces to distinguish between individual numbers
  findSpace: function (text) {
    if (/\s+(?!\n)/.test(text)) {
      console.log("space found");
    }
  }

}
