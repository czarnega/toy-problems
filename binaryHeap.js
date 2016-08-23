// Implement a Binary Min Heap
function BinaryHeap () {
  this._heap = [];
  this._compare = function (i, j) { return i < j };
}

BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function (value) {
  // add value to heap
  this._heap.push(value);
  var index = this._heap.length - 1;
  var parentIndex = getParentIndex(index);
  var parentValue = this._heap[parentIndex];
  
  while(value < parentValue){
    this._heap[index] = parentValue;
    this._heap[parentIndex] = value;
    index = parentIndex;
    parentIndex = getParentIndex(parentIndex);
    parentValue = this._heap[parentIndex];
  }
}

BinaryHeap.prototype.removeRoot = function () {
  var value = this._heap.shift();
  var oldRoot = value;
  this._heap[0] = value;
  
  var index = 0;
  var childrenIndices = getChildrenIndices(index);
  
  while(value > this._heap[childrenIndices[0]] || value > this._heap[childrenIndices[1]]){
    var leftChild = this._heap[childrenIndices[0]]
    var rightChild = this._heap[childrenIndices[1]]
    
    if(leftChild < rightChild){
      this._heap[index] = leftChild;
      leftChild = value;
      index = childrenIndices[0];
      childrenIndices = getChildrenIndices(index);
    } else {
      this._heap[index] = rightChild;
      rightChild = value;
      index = childrenIndices[1];
      childrenIndices = getChildrenIndices(index);
    }
  }
  
  return oldRoot;
}

// Helper functions to getParentIndex and getChildrenIndices of nodeIndex
function getParentIndex(nodeIndex){
  return Math.floor((nodeIndex - 1) / 2);
}

function getChildrenIndices(nodeIndex){
  return [(nodeIndex * 2 + 1),(nodeIndex * 2 + 2)];
}