const ArrayFlattener = require('./ArrayFlattener.js')

const testArrayOne = [1, [2], [3, 4, [5]]];
const testArrayTwo = [[1, 2, [3, 4]], [5], 6, [7, 8, [9]]];
const testArrayThree = ['a', 'b', ['c', ['d', ['e', 'f']]], ['g'], ['h', 'i', ['j']]];
const testArrayFour = [[1],[2],[3],[4]]
const testArrayFive = [1, [2]]

var flattenedArray = ArrayFlattener.flatten(testArrayThree)
console.log(flattenedArray);
