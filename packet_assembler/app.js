const path = require('path')

console.log('starting up file');

const testFiles = [
  path.resolve(__dirname, 'test_input_txts', 'testInput1.txt'),
  path.resolve(__dirname, 'test_input_txts', 'testInput2.txt'),
  path.resolve(__dirname, 'test_input_txts', 'testInput3.txt')
]

const messageIDExpression = /\d{4}/
const packetIndexExpression = /(?:^\d{4}\s+)(\d+)(?:\s+)/
const packetLengthExpression = /(?:^\d{4}\s+\d+\s+)(\d+)(\s{0,})/
const packetDataExpression = /(?:^\d{4}\s+\d+\s+\d+)(.{0,})/

let packetData = {}

function sendData(data){

  let dataObj = {
    messageID: data.match(messageIDExpression)[0],
    packetIndex: parseInt(data.match(packetIndexExpression)[1], 10),
    packetLength: parseInt(data.match(packetLengthExpression)[1], 10),
    packetData: data.match(packetDataExpression)[1]
  }

  let packetDataUpdate = Object.assign({}, packetData)

  if (packetDataUpdate[dataObj.messageID] === undefined) {
    let emptyArray = Array(dataObj.packetLength).fill(0)
    packetDataUpdate = Object.assign({}, packetData, {[dataObj.messageID]: emptyArray})
    packetData = packetDataUpdate
  }
  packetDataUpdate[dataObj.messageID] = packetDataUpdate[dataObj.messageID].map((item, index) => {
    if (dataObj.packetIndex === index) {
      return dataObj
    } else {
      return item
    }
  })
  packetData = packetDataUpdate
}

testFiles.forEach((file) => {
  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(file)
  });

  lineReader.on('line', function (line) {
    let randNumMiliseconds = (Math.random() * 5 + 1) * 1000
    sendData(line)

    // setTimeout(() => {
    // }, randNumMiliseconds)
    //
  });
  lineReader.on('close', () => {
    console.log('packetData is:');
    console.log(packetData);
  })

})


// let test = Map({hi: 'andy', thisIs: 'an immutable map'})
// console.log(test);
