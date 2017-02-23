const elements = require('./elements')

/*
  Challenge: using the periodic table, spell the following words with symbols from the periodic table
  complete with the full names of the elements, example:

  genius => GeNiUS (germanium nickel uranium sulfur)

  The challenge input items:
  genius
  functions
  bacon
  poison
  sickness
  ticklish
*/

/*
  What do we need?
  - method to take input
  - method to search elements object for matches based on input\
  - method to build transformed string along with full element names
*/

module.exports = {

  transformedString: "",
  userInput: "",
  matches: [],
  sortedMatches: [],

  getInput: function(input){
    this.userInput = input
  },
  searchElements: function(userInput, elements){
    let matches = []
    elements.forEach((element) => {
      if (userInput.toLowerCase().includes(element.symbol.toLowerCase())) {
        matches.push(element)
      }
    })
    return matches
  },
  sortMatches: {
    // Sorts symbol matches by "order of appearance" in input string
    byInputString: function(matches, inputString){
      let matchesArray = []
      inputString = inputString.split('')

      inputString.forEach(function(letter) {
        matches = matches.filter(function(element) {
          if(element.symbol[0].toLowerCase() === letter.toLowerCase()) {
              matchesArray.push(element)
              return false
          } else
            return true
        })
      })
      return matchesArray
    },
    // Sorts matches array alphabetically, e.g. [N, Ne, Na]-> [N, Na, Ne]
    alphabetically: function(){

    }
  },
  buildString: function(sortedMatches, inputString){
    inputString = inputString.split('')
    let compositeString = {
      word: [],
      elements: []
    }

    // 1) loop through each letter of input string
    for (var i = 0; i < inputString.length; i++) {
      // 2) compare inputString[i] against sortedMatches[j]
      for (let j = 0; j < sortedMatches.length; j++) {
        // 3) if the first letter of the symbol matches the inputString[i]
        if (sortedMatches[j].symbol[0].toLowerCase() === inputString[i]) {
            // 3b) if there is a second letter in the symbol
            if (sortedMatches[j].symbol[1]) {
              // 3c) if that second letter matches the next letter in the word
              if (sortedMatches[j].symbol[1] === inputString[i + 1]) {
                compositeString.word.push(sortedMatches[j].symbol)
                compositeString.elements.push(`(${sortedMatches[j].name}) `)
                // 3d) check if we're at the end of the word
                if (i + 2 >= inputString.length) {
                  i += 1
                  j = 0
                  // 3e) if we aren't jump two indices
                } else {
                  i += 2
                  j = 0
                }
              }
              // 3f) there is no second letter in the symbol, move on to the next letter of the inputString
            } else {
            compositeString.word.push(sortedMatches[j].symbol)
            compositeString.elements.push(`(${sortedMatches[j].name}) `)
            i += 1
            j = 0
          }
        }
      }
    }
    compositeString.word = compositeString.word.join('')
    compositeString.elements = compositeString.elements.join('')
    return `${compositeString.word} ${compositeString.elements}`
  },
  run: function(input){
    this.getInput(input)
    this.matches = this.searchElements(this.userInput, elements)
    this.sortedMatches = this.sortMatches.byInputString(this.matches, this.userInput)
    this.transformedString = this.buildString(this.sortedMatches, this.userInput)
    return this.transformedString
  }

}
