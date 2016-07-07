// Combine sets of nested arrays with overlapping values.

// For example:
// [[1,3],[4,6],[5,8],[13,17],[11,14]]
// becomes:
// [[1,3],[4,8],[11,17]]

// All sub-arrays will already be sorted (i.e. [1,4] instead of [4,1])

// 1. Step one: sort arrays within the array according to the first number, highest
// to lowest

// 2. If array[i][1] is <= array[i+1][0], push into new array
// 3. Otherwise, push array[i] into new array and move on to the next

const UNSORTED_ARRAY = [[1,3],[4,6],[5,8],[13,17],[11,14]]


let testArray = [[4,6],[1,3]]
let sortedArray = []

const ARRAY_SORTER = {

  // Brute force O(n^2) sorting method, can be refactored
  sortSubArrays: function(array, sortedArray) {
    for (var i = 0; i < array.length; i++) {
      // for (var j = 0; j < sortedArray.length; j++) {
        console.log("sortedArray.length", sortedArray.length);
        // if (sortedArray.length < 1) {
        //   console.log("sorted array len < 1", array[i]);
        //   sortedArray.push(array[i])
        // }
        // if (sortedArray.length == 1) {
        //   if (subArray[i][0] < array[j][0]) {
        //     sortedArray.push(array[i])
        //   } else {
        //     sortedArray.unshift(array[i])
        //   }
        // }
      // }
    }
    console.log(sortedArray);
  },
  mergeSubArrays:function(){

  }
}
