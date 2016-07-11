// Combine sets of nested arrays with overlapping values.

// For example:
// [[1,3],[4,6],[5,8],[13,17],[11,14]]
// becomes:
// [[1,3],[4,8],[11,17]]

// All sub-arrays will already be sorted from lowest to highest value (i.e. [1,4] instead of [4,1])

// Notes:
// Can currently sort arrays successfully if there are only two subarrays in any given array that overlap
// Would be good to refactor for cases where there are more than two sets of overlapping subarrays

let unsortedArray = [];

const ARRAY_GENERATOR = {

  makeArray: function(numSubArrays, maxValue = 10){
    let numArrays = Math.floor(Math.random() * numSubArrays + 2)
    for (let i = 0; i < numArrays; i++) {
      let firstIndex = Math.floor(Math.random() * maxValue + 1)
      let secondIndex = Math.floor(Math.random() * maxValue + 1)
      let subArray = new Array(firstIndex, secondIndex)
      unsortedArray.push(subArray)
    }
    console.log(unsortedArray);
  }
  
}

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

  // merges this.sortedArray according to this.mergeIndices and pushes results into this.mergedArrays
  mergeSubArrays: function(sortedArray, arraysToMerge) {

    const ARRAY_LEN = sortedArray.length
    console.log(sortedArray);

    for (let i = 0; i < ARRAY_LEN; i++) {
      // checks to see if iterator matches any of the merge indices
      if (i == arraysToMerge[0].indexOne || i == arraysToMerge[0].indexTwo) {
        //builds a new array based on the merge indices if there is a match, [1,3] and [2,4] become [1,4]
        let arrayMerge = new Array(sortedArray[arraysToMerge[0].indexOne][0], sortedArray[arraysToMerge[0].indexTwo][1])
        this.mergedArrays.push(arrayMerge)
        arraysToMerge.shift(arraysToMerge[0])
        // in order to avoid adding duplicates of already merged subarrays I increase the iterator by two here, which means
        // that multiple passes of the function would be required to successfully merge three or more overlapping subarrays
        i += 2
      } else {
        this.mergedArrays.push(sortedArray[i])
      }

    }
    return this.mergedArrays
  }

}
