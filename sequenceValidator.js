// Given an array of numbers, create a function that returns whether a sequence exists.
// A sequence in this situation denotates that the sequence of numbers is either 
// constantly increasing, or constantly decreasing.
// ex. sequenceValidator([1,4,6,11]) => true
// ex. sequenceValidator([3,8,15,4,7]) => false
// ex. sequenceValidator([66,44,22]) => true
// * if numbers repeat, treat it as an invalid sequence, i.e. return false

function sequenceValidator(intArray) {
	if(intArray.length < 3){
		return 'Unable to determine sequence of an array of less than three numbers'
	}
	var increasingSequence = intArray[1] - intArray[0] > 0;
	for(var i = 2; i < intArray.length; i++){
		if(intArray[i] - intArray[i-1] === 0 || intArray[i] - intArray[i-1] > 0 !== increasingSequence){
			return false;
		}
	}

	return true;
}