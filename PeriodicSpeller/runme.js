const elements = require('./elements')
const PeriodicSpeller = require('./PeriodicSpeller')


PeriodicSpeller.getInput('genius')
PeriodicSpeller.searchElements(PeriodicSpeller.userInput, elements)

PeriodicSpeller.getInput('functions')
PeriodicSpeller.searchElements(PeriodicSpeller.userInput, elements)

PeriodicSpeller.getInput('sickness')
PeriodicSpeller.searchElements(PeriodicSpeller.userInput, elements)
