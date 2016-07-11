// Given an arrayOfInts, find the highestProduct you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.
const highestProduct = (arrayOfInts) => {
	if(arrayOfInts.length < 3){
		return 'Error, must provide an array of at least three integers!'
	}

	// We're going to start at the 3rd item (at index 2)
	// so pre-populate highests and lowests based on the first 2 items.
	let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
	let lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

	let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
	let lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

	// Initialize highestProductOfThree as the product of the first three ints.
	let highestProductOfThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

	for(let i = 2; i < arrayOfInts.length; i++){
		// set current equal to value at current index
		let current = arrayOfInts[i];

		// Check to see if we have a new highestProductOfThree
		highestProductOfThree = Math.max(
			highestProductOfThree,
			highestProductOf2 * current,
			lowestProductOf2 * current
		);
		// Check to see if we have a new highestProductOf2
		highestProductOf2 = Math.max(
			highestProductOf2,
			highest * current,
			lowest * current
		);
		// Check to see if we have a new lowestProductOf2
		lowestProductOf2 = Math.max(
			lowestProductOf2,
			highest * current,
			lowest * current
		);
		// Check to see if we have a new highest value
		highest = Math.max(highest, current);
		// Check to see if we have a new lowest value
		lowest = Math.max(lowest, current);
	}

	return highestProductOfThree;
}