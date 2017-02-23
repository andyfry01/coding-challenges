const elements = require('./elements')
const PeriodicSpeller = require('./PeriodicSpeller')

let words = [
  'genius',
  'functions',
  'bacon',
  'poison',
  'sickness',
  'ticklish'
]

words.forEach((word) => {
  let wordWithElements = PeriodicSpeller.run(word)
  console.log(wordWithElements)
})
