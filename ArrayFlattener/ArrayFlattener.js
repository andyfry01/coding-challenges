// The challenge:
// var arr = [1, [2], [3, 4, [5]]];
//
// flatten(arr);
// // => [1, 2, 3, 4, 5];


/*

  Steps:
  1)  look at each item in the array
  2)  if the type of index[i] of the array is not an array, then push it into a new flattened array
  3)  if the type of index[i] of the array IS an array, head into that array to look inside
  4)  inside that array, look at each index, and push to the new array accordingly when values that
      are not arrays are found

  What do we need?
  1) a function to analyze the indices of the array
  2) a function to push the indices into the flattened array

*/

'use-strict'

module.exports = {
  flattenedArray: [],
  recursionCounter: 0,

  checkForArray: function(arrIndex){
    if (arrIndex instanceof Array) {
      return false
    }
    return true
  },

  processArray: function(array){
    array.forEach((arrIndex)=>{
      if(this.checkForArray(arrIndex)) {
        this.flattenedArray.push(arrIndex)
      } else {
        this.processArray(arrIndex)
      }
    })
  },

  flatten: function(array) {
    this.processArray(array)
    this.done()
  },

  done: function(){
    return this.flattenedArray
  }
}
