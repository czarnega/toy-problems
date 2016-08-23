// Given an array of negative/positive integers, return the element in the center position of the array.
// If the array has an even number of elements, return the average of the two middle elements instead.
function middle (numbers) {
	return numbers.length % 2 === 0 ? (numbers[numbers.length/2 - 1] + numbers[numbers.length/2])/2 : numbers[Math.floor(numbers.length/2)];
}