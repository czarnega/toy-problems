// For a 6x6 matrix calculate the maximum sum of each hourglass section in the matrix,
// where an hourglass can be represented as the following

// 	xxx
// 	 x
// 	xxx

// Example input:
// 1 1 1 0 0 0
// 0 1 1 1 1 0
// 1 1 1 0 0 0
// 1 0 0 0 0 1
// 0 0 1 1 1 1
// 0 0 1 0 1 0
// Example output:
// 7

function maxHourglassSum(matrix){
	let currentMaxSum = -Infinity;

	for(let i = 0; i < matrix.length - 2; i++){
		currentMaxSum = Math.max(currentMaxSum,getMaxRowSum(matrix,i))
	}

	return currentMaxSum;
}

function getMaxRowSum(matrix,i){
	let positionOne = matrix[i][0]+matrix[i][1]+matrix[i][2]+matrix[i+1][1]+matrix[i+2][0]+matrix[i+2][1]+matrix[i+2][2]
	let positionTwo = matrix[i][1]+matrix[i][2]+matrix[i][3]+matrix[i+1][2]+matrix[i+2][1]+matrix[i+2][2]+matrix[i+2][3]
	let positionThree = matrix[i][2]+matrix[i][3]+matrix[i][4]+matrix[i+1][3]+matrix[i+2][2]+matrix[i+2][3]+matrix[i+2][4]
	let positionFour = matrix[i][3]+matrix[i][4]+matrix[i][5]+matrix[i+1][4]+matrix[i+2][3]+matrix[i+2][4]+matrix[i+2][5]

	return Math.max(positionOne,positionTwo,positionThree,positionFour);
}