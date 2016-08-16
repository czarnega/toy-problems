// Write a function that reverses a linked-list
var Node = function(val){
	this.value = val;
	this.next = null;
}

var LinkedList = function(value){
	this.value = value;
	this.next = null;
	this.head = this;
	this.tail = this.head;
}

LinkedList.prototype.addNode = function(value){
	var newTail = new Node(value);
	this.tail.next = newTail;
	this.tail = newTail;
}

LinkedList.prototype.printNodes = function(){
	var currentNode = this.head;
	var results = [];
	while(currentNode){
		results.push(currentNode.value);
		currentNode = currentNode.next;
	}
	return results;
}

function reverseLL(linkedList){
	// Set the tail of the linkedList to the current head node
	linkedList.tail = linkedList.head;
	// Set the currentNode to the node after the head
	var currentNode = linkedList.head.next;
	// Set the next pointer of the head to null
	linkedList.head.next = null;
	// Set the lastNode to head node
	var lastNode = linkedList.head;
	// While the currentNode exists
	while(currentNode){
		// Assign a variable to the next node in the linked list
		var nextNode = currentNode.next;
		// Set the next pointer of the currentNode to the lastNode
		currentNode.next = lastNode;
		// Update the lastNode to the currentNode
		lastNode = currentNode;
		// Set currentNode to the nextNode
		currentNode = nextNode;
	}
	// Set the head property of the linkedList to the lastNode
	linkedList.head = lastNode;
}
