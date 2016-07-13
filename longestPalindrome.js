// Implement a function that finds the longest palindrome in a given string. 
// For example, in the string “My dad is a racecar athlete”, the longest palindrome is “a racecar a”. 
// Count whitespaces as valid characters.
function longestPalindrome (string) {
	let longestPalindrome= '';
	
	for (let i= 0; i < string.length; i++){
	  let currentString = string[i];
	  for (let j = i+1; j < string.length; j++){
	    currentString += string[j];
	    currentReverseString = currentString.split('').reverse().join('');
	    if (currentString === currentReverseString){
	    	if(currentString.length > longestPalindrome.length){
	    		longestPalindrome = currentString;
	    	}
	    } 
	  }
	}
	return longestPalindrome;
}

