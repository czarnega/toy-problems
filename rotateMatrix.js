// Write a function that rotates a NxN matrix 90 degrees clockwise.
// let array = [[1, 2, 3, 4],[5, 6, 7, 8],[9, “A”,”B”,”C”],[“D”,”E”,”F”,”G”]];
// rotateMatrix(array); => [[“D”, 9, 5, 1],[“E”, “A”, 6, 2],[“F”,”B”, 7, 3],[“G”,”C”, 8, 4]]
const rotateMatrix = (matrix) => {
  var result = [];
  // work from bottom up, and push each value of array into corresponding row
  for(var i = matrix.length - 1; i >= 0; i--){
    for(var j = 0; j <= matrix.length - 1; j++){
  	  if(i === matrix.length - 1){
  	  	result.push([]);
  	  }
      result[j].push(matrix[i][j]);
    }
  }
  return result;
}

// function rotateMatrix (matrix) {
//   var rotated = [];
//   for (var i = 0; i < matrix.length; i++) {
//     var array = [];
//     for (var j = 0; j < matrix[i].length; j++) {
//       // adds to the beginning of the array
//       // and switches the order of matrix
//       array.unshift(matrix[j][i]);
//     }
//     rotated.push(array);
//   }
//   return rotated;
// }