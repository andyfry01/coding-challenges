// Write a program to swap odd and even bits in an integer with as few
// instructions as possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3
// are swapped, etc).

var integer = 3223452345454789
var binary = ""

var binaryConvert = function(integer) {
  binary = integer.toString(2)
}

binaryConvert(integer)
console.log("integer in binary is", binary);

var swapOddEven = function(binary) {
  var binaryArr = []
  for (var i = 0; i < binary.length; i++) {
    binaryArr.push(binary[i])
  }
  for (var i = 0; i < binary.length - 1; i += 2) {
    var temp = binaryArr.splice(i + 1, 1)
    binaryArr.splice(i, 0, temp[0])
  }
  return binaryArr.join("")
}

swapOddEven(binary)
