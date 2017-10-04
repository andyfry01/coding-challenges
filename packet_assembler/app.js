const path = require('path')
console.log('starting up file');

const testFiles = [
  path.resolve(__dirname, 'test_input_txts', 'testInput1.txt'),
  path.resolve(__dirname, 'test_input_txts', 'testInput2.txt'),
  path.resolve(__dirname, 'test_input_txts', 'testInput3.txt')
]
//
function sendData(data, randNumMiliseconds){
  console.log('data is');
  console.log(data);
  console.log(`sent after ${randNumMiliseconds} miliseconds`);
}

testFiles.forEach((file) => {
  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(file)
  });

  lineReader.on('line', function (line) {
    let randNumMiliseconds = (Math.random() * 5 + 1) * 1000
    setTimeout(() => {
      sendData(line, randNumMiliseconds)
    }, randNumMiliseconds)
  });

})
