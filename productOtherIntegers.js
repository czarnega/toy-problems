// product of all other numbers
// given an array of integers, return an array of the products of all integers except the integer at that index
// example: productOtherInts([1,2,3,4]) => [24,12,8,6]
// Constraints:
// No division, Time Complexity: O(n), Space Complexity: O(n)
const productOtherInts = (intArray) => {
	// create 1 additional array
	let results = [];

	// use a greedy approach to iterate through intArray twice,
	// once from beginning to end and once from end to beginning
	let productSoFar = 1;
	for(let i = 0; i < intArray.length; i++){
		results[i] = productSoFar;
		productSoFar *= intArray[i];
	}

	productSoFar = 1;
	for(let j = intArray.length - 1; j >= 0; j--){
		results[j] *= productSoFar;
		productSoFar *= intArray[j];
	}

	return results;
}