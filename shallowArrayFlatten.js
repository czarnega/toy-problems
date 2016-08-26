// Given an array of arrays, return all elements in a single array. 
// Nested arrays will be at most one level deep.
// Example:
// input = [ [ 10 ], [ 20, 30 ], [ 40 ] ]
// output = [ 10, 20, 30, 40 ]

function flatten(array) {
  let result = [];
  array.forEach(item => (Array.isArray(item) ? item.forEach(val => result.push(val)) : result.push(item)))
  return result;
}