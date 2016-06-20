// Assume you have a method isSubstring which checks if one word is a substring of another
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
// one call to isSubstring (i e , “waterbottle” is a rotation of “erbottlewat”)

var string = "Some string"
var subString = "stringSome "
var notSubString = "Not a match"

function isSubstring(strOne, strTwo) {
  var strOneLen = strOne.length;
  var strTwoLen = strTwo.length;
  var temp = strOne += strOne

  if (strOneLen !== strTwoLen) {
    return "Not a match!"
  }
  if (temp.includes(strTwo)) {
    return "Match!"
  } else {
    return "Not a match!"
  }

}
isSubstring(string, subString)

isSubstring(string, notSubString)
