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
  buildString: function(matches, inputString){

  },
  returnString: function(){},
  run: function(input){
    this.getInput(input)
    this.matches = this.searchElements(this.userInput, elements)
    this.sortedMatches = this.sortMatches.byInputString(this.matches, this.userInput.split(''))

  }

}
