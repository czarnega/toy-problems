// Write a function that accepts two strings as arguments, 
// and returns only the characters that are common to both strings.
// 
// Your function should return the common characters in the same order that they appear in the first argument. 
// Do not return duplicate characters and ignore whitespace in your returned string.
// 
// Example: commonCharacters('acexivou', 'aegihobu')
// Returns: 'aeiou'

var commonCharacters = function(string1, string2){
  var string1array = string1.split(" ").join('').split("");
  var string2array = string2.split(" ").join('').split("");
  var stringToReturn = "";  

  for(var i = 0; i < string1array.length; i++){
    var wasFound = false;
    if(string2array.indexOf(string1array[i]) !== -1){
      if(stringToReturn.indexOf(string1array[i]) === -1){
        stringToReturn += string1array[i];
      }
    }
  }
  
  return stringToReturn;

};
