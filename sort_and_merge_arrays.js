// Combine sets of nested arrays with overlapping values.

// For example:
// [[1,3],[4,6],[5,8],[13,17],[11,14]]
// becomes:
// [[1,3],[4,8],[11,17]]

// Notes:
// Can currently sort arrays successfully if there are only two subarrays in any given array that overlap
// Would be good to refactor for cases where there are more than two sets of overlapping subarrays

const VARIABLES = {
 unsortedArray: [],
 sortedArray: undefined,
 mergeIndices: [],
 mergedArrays: [],
}

// Array generator method to come up with x number of unsorted subarrays. Default max value of 10 for each subarray index
const ARRAY_GENERATOR = {

  makeArray: function(numSubArrays, maxValue = 50){
    for (let i = 0; i < numSubArrays; i++) {
      let firstIndex = Math.floor(Math.random() * maxValue + 1)
      let secondIndex = Math.floor(Math.random() * maxValue + 1)
      let subArray = new Array(firstIndex, secondIndex)
      VARIABLES.unsortedArray.push(subArray)
    }
    console.table(VARIABLES.unsortedArray);
  }

}

const ARRAY_SORTER = {

  // Checks all subarrays and orders each index from lowest highest ([3,1] becomes [1,3])
  orderSubArrayIndices: function(array) {
    const ARRAY_LEN = array.length
    for (let i = 0; i < ARRAY_LEN; i++) {
      if (array[i][0] > array[i][1]) {
        let temp = undefined
        temp = array[i][0]
        array[i][0] = array[i][1]
        array[i][1] = temp
      }
    }
    console.table(array);
  },

  // Bubble sort method to get sub arrays in ascending order according to first/second index ([2,6], [2,5], [1,3] becomes [1,3], [2,5], [2,6])
  sortSubArrays: function(array) {
    const ARRAY_LEN = array.length
    for (let i = ARRAY_LEN - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (array[j-1][0] === array[j][0]) {
          if (array[j-1][1] > array[j][1]) {
            let temp = array[j]
            array[j] = array[j-1]
            array[j-1] = temp
          }
        }
        if (array[j-1][0] > array[j][0]) {
          let temp = array[j-1]
          array[j-1] = array[j]
          array[j] = temp
        }
      }
    }
    VARIABLES.sortedArray = array
    console.log("sorted array is", VARIABLES.sortedArray);
  },

  // locates indices in sorted array to merge, which is used in turn by mergeSubArrays
  findArraysToMerge = function(sortedArray) {
    const ARRAY_LEN = sortedArray.length - 1
    for (let i = 0; i < ARRAY_LEN; i++) {
      let mergeObject = {
        start: i,
        end: undefined,
        firstIndex: sortedArray[i],
        lastIndex: undefined
      }
      for (let j = i+1; j < ARRAY_LEN; j++) {
        if (sortedArray[i][1] > sortedArray[j][0]) {
          console.log(sortedArray[i][1], sortedArray);
          mergeObject.end = j
        }
        if (sortedArray[j][1] < sortedArray[j][0]) {
          mergeObject.lastIndex = sortedArray[j][1]
          VARIABLEs.mergeIndices.push(mergeObject)
          i = j + 1
        }
      }
    }
    // console.log(VARIABLES.mergeIndices);
  },

  // merges VARIABLES.sortedArray according to VARIABLES.mergeIndices and pushes results into VARIABLES.mergedArrays
  mergeSubArrays: function(sortedArray, arraysToMerge) {

    const ARRAY_LEN = sortedArray.length
    console.log(sortedArray);

    for (let i = 0; i < ARRAY_LEN; i++) {
      // checks to see if iterator matches any of the merge indices
      if (i == arraysToMerge[0].indexOne || i == arraysToMerge[0].indexTwo) {
        //builds a new array based on the merge indices if there is a match, [1,3] and [2,4] become [1,4]
        let arrayMerge = new Array(sortedArray[arraysToMerge[0].indexOne][0], sortedArray[arraysToMerge[0].indexTwo][1])
        VARIABLES.mergedArrays.push(arrayMerge)
        arraysToMerge.shift(arraysToMerge[0])
        // in order to avoid adding duplicates of already merged subarrays I increase the iterator by two here, which means
        // that multiple passes of the function would be required to successfully merge three or more overlapping subarrays
        i += 2
      } else {
        VARIABLES.mergedArrays.push(sortedArray[i])
      }

    }
    return VARIABLES.mergedArrays
  }

}
