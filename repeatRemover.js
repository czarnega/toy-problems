// Create a function that removes repeating characters from a string.
// ex. repeatRemover('abbccba') => 'aba'

function repeatRemover(string){
	if(string.length < 2){
		return string;
	}

	var startingRepIndex = null;
	var endingRepIndex = null;
	var formatted = '';

	for(var i = string.length - 2; i >= 0; i--){
		if (string[i] === string[i-1]){
			startingRepIndex = i;
			endingRepIndex = endingRepIndex || i + 1;
		} else {
			if(startingRepIndex && endingRepIndex){
				string = string.slice(0,startingRepIndex - 1) + string.slice(endingRepIndex);
				startingRepIndex = null;
				endingRepIndex = null;
			}
		}
	}
	return string;
}