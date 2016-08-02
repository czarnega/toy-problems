// Given a single input string, write a function that produces all
// possible anagrams of a string and outputs them as an array.

// Permutation problem with no repeated characters
function allAnagrams (string) {
  let storage = {};
  
  function recurse(buildingString, availableCharacters){
    if(buildingString.length === string.length){
      storage[buildingString] = true;
    } else {
      for(let i = 0; i < availableCharacters.length; i++){
        const newBuildingString = buildingString + availableCharacters[i];
        const availableCharactersSplice = availableCharacters.slice(0,i)+availableCharacters.slice(i+1);
        recurse(newBuildingString,availableCharactersSplice);
      }
    }
  }
  recurse('',string);
  
  return Object.keys(storage);
}
