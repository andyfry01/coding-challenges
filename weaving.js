/*
Weave two arrays into each other interchangeably, one index after the other.

If we want to weave [a] into [1,2,3], the output is: [1, a, 2, a, 3]
If we want to weave [a, b] into [1, 2, 3, 4], the output is [1, a, 2, b, 3, a, 4].

More examples:

[a, b] + [1, 2, 3, 4, 5, 6] => [1, a, 2, b, 3, a, 4, b, 5, a, 6]
[a, b, c] + [1, 2, 3, 4] => [1, a, 2, b, 3, c, 4]
[a, b, c, d] + [1, 2, 3, 4] => [1, a, 2, b, 3, c, 4]

If we want to weave [a, b, c, d, e] into [1, 2], the output is simply [1, a, 2].

*/

function weave(arrayToWeave, targetArray) {

  console.log(`arrayToWeave, [${arrayToWeave}], targetArray, [${targetArray}]`);

  let weavedArray = []

  for (let i = 0, j = 0; i <= targetArray.length - 1; i++) {

    if (j == arrayToWeave.length) {
      j = 0
    }
    if (i == targetArray.length - 1) {
      weavedArray.push(targetArray[targetArray.length - 1])
      console.log("End of target array reached, returning weaved array:");
      return weavedArray
    }
    if (i < targetArray.length - 1) {
      weavedArray.push(targetArray[i])
      weavedArray.push(arrayToWeave[j])
      j++
    }

  }
}
