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


let testArray = [[4,6],[1,3],[2,3],[10,12]]
let sortedArray = []

const ARRAY_SORTER = {

  // Bubble sort method to get sub arrays in correct order
  sortSubArrays: function(array) {
    const ARRAY_LEN = array.length
    for (let i = ARRAY_LEN - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (array[j-1][0] > array[j][0]) {
          let temp = array[j-1]
          array[j-1] = array[j]
          array[j] = temp
        }
      }
    }
    console.log(array);
  },
  mergeSubArrays:function(){

  }
}
