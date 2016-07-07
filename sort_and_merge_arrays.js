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

const ARRAY_SORTER = {
  sortedArray: [],
  sortSubArrays: function(array) {

  },
  mergeArrays:function(){

  }
}
