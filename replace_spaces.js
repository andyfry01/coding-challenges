// Write a method to replace all spaces in a string with ‘%20’

var string = "Loose lips sink ships."

var replaceSpaces = function(string) {
  var strLength = string.length;
  var newStr = "";
  for (var i = 0; i < strLength; i++) {
    if /\s/.test(string[i]) {
      newStr += "%20"
    } else {
      newStr += string[i]
    }
  }
  return newStr
}

replaceSpaces(string)
