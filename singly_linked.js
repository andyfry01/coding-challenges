// Implement an algorithm to find the nth to last element of a singly linked list.

function Node(data) {
  this.data = data,
  this.next = undefined
};

function SinglyList() {
  this.length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value) {
  var node = new Node(value),
  currentNode = this.head;

  //adds node to head of list if the list is empty
  if (!currentNode) {
    this.head = node;
    this.length += 1;
    console.log(node);
  }

  //adds node to end of list if the list is not empty
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;
  this.length += 1
  console.log(node);
}


function nodeFinder(list, n) {

  var listLen = list.length;
  var numSteps = listLen - n;
  var starter = "list.head"
  var step = ".next"
  var steps = step

  var stepFinder = function(numSteps) {
    for (var i = 0; i < numSteps - 1; i += 1) {
      steps = steps += step
    }
  }

  if (numSteps == 0) {
    return console.log("The path to the node " + n + " step(s) from the end of the list is:", list.head);
  } else if (numSteps > 0) {
    stepFinder(numSteps)
    return console.log("The path to the node " + n + " step(s) from the end of the list is:", starter += steps)
  }
}

// Test data

var list = new SinglyList()

var nodeOne = new Node("First node")
var nodeTwo = new Node("Second node")
var nodeThree = new Node("Third node")

list.add(nodeOne)
list.add(nodeTwo)
list.add(nodeThree)

nodeFinder(list, 2)
