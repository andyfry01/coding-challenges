const elements = require('./elements')
const PeriodicSpeller = require('./PeriodicSpeller')
const words = require('./words.js')

// let words = [
//   'genius',
//   'functions',
//   'bacon',
//   'poison',
//   'sickness',
//   'ticklish'
// ]

words.forEach((word) => {
  let wordWithElements = PeriodicSpeller.run(word)
  if (wordWithElements) {
    console.log(wordWithElements)
  }
})
