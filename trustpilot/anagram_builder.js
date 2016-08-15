'use-strict'

class WordList {

  constructor() {
    this.wordArray = ["command", "drab", "fang", "hypnotic", "one", "plus", "raise", "temporary", "torpid", "twelve"]
    this.sortedWords = []
    this.hashTable = []
  }

  static sortAndBuildHashTable(wordList) {
    let list = wordList.wordArray
    for (let word in list) {

      wordList.sortedWords.push(list[word].split('').sort())

      let wordHash = new Object
      wordHash.sortedWord = list[word].split('').sort()
      wordHash.unsortedWord = list[word]
      wordList.hashTable.push(wordHash)

    }
  }
}


class Anagram {
  constructor(sentence) {
    this.sentence = sentence
    this.lettersArr = []
  }

  static sortSentence(anagram) {
    let unsortedSentence = anagram.sentence
    for (let letter in unsortedSentence) {
      if (unsortedSentence[letter] !== " ") {
        anagram.lettersArr.push(unsortedSentence[letter])
      }
      anagram.lettersArr.sort()
    }
  }

  static buildLettersArray(anagram, wordList) {


    let sortedSentence = anagram.lettersArr
    let sortedWordList = wordList.sortedWords

    let temp = []
    let possibleWords = []

    for (var i = 0; i < sortedWordList.length; i++) {
      console.log(`now comparing this word: ${sortedWordList[i]}`);

      for (var j = 0; j < sortedWordList[i].length; j++) {
        console.log(`specifically this letter: ${sortedWordList[i][j]}`);

        for (var k = 0; k < sortedSentence.length; k++) {
          console.log(`to this letter in the sorted sentence: ${sortedSentence[k]}`);

          if (sortedWordList[i][j] === sortedSentence[k]) {
            temp.push(sortedSentence[k])
            j += 1
          }
        }
      }
      console.log(temp);

      for (var l = 0; l < wordList.hashTable.length; l++) {
        for (var m = 0; m < wordList.hashTable[l].sortedWord.length; m++) {
          for (var n = 0; n < temp.length; m++) {
            if (temp[n] == wordList.hashTable[l].sortedWord[m]) {
              possibleWords.push(temp)
            }
            temp = []
          }
        }
      }
      console.log(possibleWords);
      temp = []

    }
    console.log(possibleWords);
  }
}
