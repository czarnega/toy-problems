// Given a base-10 integer convert it to binary and find the integer
// denoting the maximum number of consecutive 1's in the binary representation.
// input: integer
// output: integer
// example: longestOneRunBinary(13); => 2

function longestOneRunBinary(num){
	let longest = 0, binaryArr = num.toString(2).split('0');

	binaryArray.forEach(str => { longest = (str.length > longest) ? str.length : longest });

	return longest
}