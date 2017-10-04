const fs = require('fs')
const path = require('path')
console.log('starting up file');

const testFiles = [
  path.resolve(__dirname, 'test_input_txts', 'testInput1.txt'),
  path.resolve(__dirname, 'test_input_txts', 'testInput2.txt'),
  path.resolve(__dirname, 'test_input_txts', 'testInput3.txt')
]

// console.log('testFiles are');
// console.log(testFiles);
testFiles.forEach(testFile => {
  var readStream = fs.createReadStream(testFile, {encoding: 'utf8'});

  readStream.on('data', function (chunk) {
    console.log(chunk);
  })

  readStream.on('end', function () {  // done
    console.log(`finished reading ${testFile}`);
  });

})
