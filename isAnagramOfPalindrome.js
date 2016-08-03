/**
 * Returns `true` if any of the given string contains a palindrome.
 * @param {String} s the string to test
 */
function PalindromeFinder(s) {
  //build an array of characters from the string `s`
  var chars = s.split('');

  //store how many of the same char within the string (so the array)
  var charsOccurences = {};
  chars.forEach(function(c) {
    if (charsOccurences[c] === undefined) { //create if new
      charsOccurences[c] = 1; 
    } else { //increment
      charsOccurences[c] = charsOccurences[c] + 1; 
    }
  });

  var evens = 0; //count the evens
  var odds = 0; //count the odds

  for (var char in charsOccurences) {
    var occurrs = charsOccurences[char];
    if (occurrs % 2 === 0) { //count evens...
      evens = evens + 1;
    } else { //count odds...
      odds = odds + 1;
    }
  }

  //the result: 
  //  if the string length is even then `no odds chars can be present`
  //  if the string length is odd, then `JUST only one odd char can be found`.
  var result = false;
  if (s.length % 2 === 0) {
    if (odds === 0) { //no odds here please...
      result = true;
    }
  } else {
    if (odds === 1) { //here we want only one odd
      result = true;
    }
  }
  return result;
}