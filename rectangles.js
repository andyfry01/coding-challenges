/*

Given a word, a width and a length, you must print a rektangle with the word of the given dimensions.

Input:    "REKT", width=1, height=1
          Output:
          R E K T
          E     K
          K     E
          T K E R

Input:    "REKT", width=2, height=2
          Output:
          T K E R E K T
          K     E     K
          E     K     E
          R E K T K E R
          E     K     E
          K     E     K
          T K E R E K T

*/

const REKTANGLE_GENERATOR = {

  rektangleInfo: {
    word: "REKT",
    height: 1,
    width: 1
  },

  getInput: function (){
    this.rektangleInfo.word = prompt("What word would you like to rektanglize?")
    this.rektangleInfo.height = prompt("How tall should the rektangle be?")
    this.rektangleInfo.width = prompt("How wide should the rektangle be?")
  },

  buildRektangle: function(rektangleInfo){

    let word = rektangleInfo.word
    let wordReverse
    let wordLen = word.length
    let whiteSpace = wordLen - 2
    let space = " "

    for (let i = wordLen - 1; i >= 0; i -= 1) {
      wordReverse += word[i]
    }

    console.log(word);

    for (let i = 0, j = wordLen - 2; i < word.length - 1; i += 1) {
      console.log(`${word[i + 1]} ${space *= whiteSpace} ${word[j]}`);
      j -= 1
    }

    console.log(wordReverse);


  }


}


REKTANGLE_GENERATOR.buildRektangle(REKTANGLE_GENERATOR.rektangleInfo)
