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

let packetTracker = {}
let deliveredPackets = []

let lineDivider = ''
let numDividerCharacters = process.stdout.columns
for (let i = 0; i < numDividerCharacters; i++) {
  lineDivider += '-'
}


function sendData(data){
  return new Promise((resolve, reject) => {
    let updatedPacket = updatePacket(data)
    if (updatedPacket) {
      resolve(updatedPacket)
    } else {
      reject({error: data})
    }
  })
}

function updatePacket(packetData){
  let packetToUpdate = undefined
  // build data object by parsing packet for relevant parts
  let incomingPacketData = {
    messageID: packetData.match(messageIDExpression)[0],
    packetIndex: parseInt(packetData.match(packetIndexExpression)[1], 10),
    packetLength: parseInt(packetData.match(packetLengthExpression)[1], 10),
    packetData: packetData.match(packetDataExpression)[1]
  }

  let packetTrackerUpdate = Object.assign({}, packetTracker)
  // If we haven't seen the messageID in the packet stream already, create a new entry to track it in the packetTracker, with an empty array matching the indicated length of the incoming data
  if (packetTrackerUpdate[incomingPacketData.messageID] === undefined) {
    let emptyPacketDataArray = Array(incomingPacketData.packetLength).fill(0)
    packetTrackerUpdate = Object.assign({}, packetTrackerUpdate, {[incomingPacketData.messageID]: emptyPacketDataArray})
    packetToUpdate = packetTrackerUpdate[incomingPacketData.messageID]
  }
  // map through the packetTrackerUpdate array and add the incoming packet at the correct index in the array
  packetToUpdate = packetTrackerUpdate[incomingPacketData.messageID].map((item, index) => {
    if (incomingPacketData.packetIndex === index) {
      return incomingPacketData
    } else {
      return item
    }
  })
  let packetObject = {
    messageID: incomingPacketData.messageID,
    packetArray: packetToUpdate
  }
  return packetObject
}

function thisPacketIsComplete(packetData) {
  // test if any index in the assembled packet hasn't been filled in with the corresponding line from the packet. If there are gaps, we haven't received the whole packet yet.
	let completionStatus = undefined
	packetData.forEach((item, index) => {
    if (item === 0) {
      completionStatus = false
    }
    if (index === packetData.length - 1 && completionStatus === undefined) {
      completionStatus = true
    }
	})
	return completionStatus
}

function thisPacketHasBeenDelieveredAlready(messageID) {
  // Check to see if this particular packet has been delievered already. If it has been delievered, do not print it (seeing as we already have), if it has not been delivered, add messageID to array for tracking.
  if (deliveredPackets.indexOf(messageID) > -1) {
    return true
  } else {
    deliveredPackets.push(messageID)
    return false
  }
}

function printAssembledPacket(packetData) {
  // check for delivery status, assemble and print package
  if (thisPacketHasBeenDelieveredAlready(packetData.messageID)) {
    return
  } else {
    let output = ''
    packetData.packetArray.forEach(line => {
      output += line.packetData
    })
    console.log('')
    console.log('')
    console.log(lineDivider);
    console.log(`messageID: ${packetData.messageID}`);
    console.log(`message content:`)
    console.log(output);
    console.log(lineDivider);
    console.log('')
    console.log('')
  }
}

testFiles.forEach((file) => {
  // loop through test files array, deliver 'packets' from test files at random intervals to be parsed, assembled, tested and ultimately printed.
  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream(file)
  });

  lineReader.on('line', function (line) {
    // sets random 'delivery' interval so packets in an arbitrary order at arbitrary times
    let randNumMiliseconds = (Math.random() * 5 + 1) * 1000
    setTimeout(() => {
      sendData(line).then(updatedPacketData => {
        packetTracker[updatedPacketData.messageID] = updatedPacketData.packetArray
        if (thisPacketIsComplete(updatedPacketData.packetArray) === true) {
          printAssembledPacket(updatedPacketData)
        }
      })
    }, randNumMiliseconds)
  });
})
