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

  sortedArray: undefined,
  mergeIndices: [],
  mergedArrays: [],

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
    this.sortedArray = array
    console.log("sorted array is", this.sortedArray);
  },

  // locates indices in sorted array to merge, which is used in turn by mergeSubArrays
  findArraysToMerge: function(sortedArray) {
    const ARRAY_LEN = sortedArray.length - 1
    for (let i = 0; i < ARRAY_LEN; i++) {
      if (sortedArray[i][1] > sortedArray[i+1][0]) {
        console.log(sortedArray[i], sortedArray[i+1]);
        console.log("array", i, "and array", i+1, "need to be combined");
        this.mergeIndices.push({indexOne: i, indexTwo: i+1})
      }
    }
    console.log(this.mergeIndices);
  },

  mergeSubArrays: function(sortedArray, mergeIndices) {
    const ARRAY_LEN = mergeIndices.length
    for (let i = 0; i < ARRAY_LEN; i++) {

    }
  }

}
