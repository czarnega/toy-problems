// Write a recursive function for generating all permutations of an input string. Return them as a set.
// Assume every character in the input string is unique.
// Solution must be recursive.

function stringPermutations(str){
	var permutations = [],
	nextWord = [],
	stringCharacters = str.split('');

	// recursive permutation builder
	function permutationBuilder(characters){
		if(characters.length === 0){
			permutations.push(nextWord.join(''));
		}

		for (var i=0; i < characters.length; i++){
			characters.push(characters.shift());
			nextWord.push(characters[0]);
			permutationBuilder(characters.slice(1));
			nextWord.pop();
		}
	}
	permutationBuilder(stringCharacters);

	return permutations;
}