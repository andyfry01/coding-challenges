// Write a method to sort an array of strings so that all the anagrams are next to each other.

var anagramArr = ["alert", "alter", "later", "alerted", "altered", "related", "treadle", "ales", "leas", "sale", "seal", "aligned", "dealing", "leading", "allergy", "gallery", "largely", "regally", "amen", "mane", "mean", "name"]
var shuffledArr = ["alter", "alerted", "sale", "mean", "alert", "name", "seal", "ales", "related", "gallery", "treadle", "allergy", "dealing", "largely", "mane", "altered", "leading", "leas", "later", "regally", "aligned", "amen"]

function sortAnagrams (array) {

  var anagramObj = new Object;

  // 1) sorts the letters of each anagram and adds them to the anagramObj to be later compared
  for (var i = 0; i < array.length; i++) {
    var temp = []
    for (var j = 0; j < array[i].length; j++) {
      temp.push(array[i][j])
    }
    var word = new Object;
    word["index"] = i
    word["anagram"] = array[i]
    word["sorted"] = temp.sort().join('')
    anagramObj[i] = word
  }
  console.log("anagramObj is", anagramObj);
  // 2) maps through anagramObj to find the anagrams

  var sortedArray = [];

  for (var word in anagramObj) {
    if (anagramObj.hasOwnProperty(word)) {
      for (var otherWord in anagramObj) {
        if (anagramObj.hasOwnProperty(otherWord) && anagramObj[otherWord]["index"] !== anagramObj[word]["index"]) {
          if (anagramObj[word]["sorted"] === anagramObj[otherWord]["sorted"]) {
            sortedArray.push(anagramObj[otherWord]["anagram"])
            delete anagramObj[otherWord]["anagram"]
          }
        }
      }
    }
    sortedArray.push(anagramObj[word]["anagram"])
    delete anagramObj[word]["anagram"]
  }
  console.log(sortedArray);
  console.log(sortedArray.length);
  console.log(shuffledArr.length);
}

sortAnagrams(shuffledArr)
