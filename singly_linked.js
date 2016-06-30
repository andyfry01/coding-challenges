// Implement an algorithm to find the nth to last element of a singly linked list.

  function Node(data) {
    this.data = data,
    this.next = undefined
  };

  function SinglyList(node) {
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

      return node;
    }

    //adds node to end of list if list is not empty
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    this.length += 1

    return node;
  }
