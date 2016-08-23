// Implement a stack with the following methods:
// * `size` should return an integer representing the number of elements in the stack.
// * `peek` should return the top item of the stack without removing it. If the stack is empty, it should return null.
// * `push` should add an item to the top of the stack. It should also accept multiple arguments and push them to the stack in order. It should return the topmost value of the stack after the pushing.
// * `pop` should remove an item off the top of the stack and returned the removed value.
// Constraint: do not use an array as storage!

var Stack = function(initialValue) {
  this.storage = {};
  this.count = 0;
  if(initialValue){
    this.storage[this.count] = initialValue;
    this.count++;
  }
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.peek = function() {
  return this.count > 0 ? this.storage[this.count - 1] : null;
};

Stack.prototype.push = function(val) {
  let values = [].slice.call(arguments);
  for(let value of values){
    this.storage[this.count] = value;
    this.count++;
  }
  return this.peek();
};

Stack.prototype.pop = function() {
  if(this.peek()){
    this.count--;
    let res = this.storage[this.count];
    delete this.storage[this.count];
    return res;
  } else {
    return null;
  }
};