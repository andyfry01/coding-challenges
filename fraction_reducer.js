const TEST_INPUT = [
  [4, 8]
  [1536, 78360],
  [51478, 5536],
  [46410, 119340],
  [7673, 4729],
  [4096, 1024]
]

const TEST_OUTPUT = [
  [1, 2]
  [64, 3265],
  [25739, 2768],
  [7, 18],
  [7673, 4729],
  [4, 1]
]

const TESTS = {
  testOutput: function(fxnOutput, testOutput) {
    if (fxnOutput != testInput) {
      console.error("Error, function produced incorrect output.");
    }
  }
}
