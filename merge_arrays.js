// You are given two sorted arrays, A and B, and A has a large enough buffer
// at the end to hold B. Write a method to merge B into A in sorted order.

/*
1) start at index 0 of array A, compare it to index 0 of array B,
2) if array A[0] < array B[0] and array A[1] > array B[0], splice array B[0] after array A[0]
3) else run same comparison between array A[1] and array B[0]
4) Shift array B[0]
*/

var A = [1, 4, 8, 9, 10, 15, 18, 20];
var B = [2, 3, 8, 11, 16, 17, 22];

var EXPECTED_RESULT = [1, 2, 3, 4, 8, 8, 9, 10, 11, 15, 16, 17, 18, 20, 22]

function merge (arrayOne, arrayTwo) {

  finalLen = arrayOne.length + arrayTwo.length;

  for (var i = 0; i < finalLen; i += 1) {
    if (arrayOne[i] <= arrayTwo[0] && arrayTwo[0] <= arrayOne[i + 1]) {
      console.log("This", arrayOne[i], "is less than this", arrayTwo[0]);
      var spliceIndex = i + 1
      arrayOne.splice(spliceIndex, 0, arrayTwo.shift(arrayTwo[0]))
    }
    console.log("Array A is", arrayOne);
    console.log("Array B is", arrayTwo);
  }
  arrayOne.splice(arrayOne.length + 1, 0, arrayTwo[0])
}

function test (array, testArr) {
  console.log(array);
  console.log(testArr);
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] !== testArr[i]) {
      return "Failed!"
    }
  }
  return "Success!"
}

merge(A, B)

test(A, EXPECTED_RESULT)
