// Given two strings, return true if one string is an anagram of another.
function isAnagram (a, b) {
  var trimmedA = a.split(' ').join('').trim();
  var trimmedB = b.split(' ').join('').trim();
  
  if(trimmedA.length !== trimmedB.length){
    return false;
  }
  
  for(let i = 0; i < trimmedA.length; i++){
    var indexB = trimmedB.indexOf(trimmedA[i])
    if(indexB >= 0){
			trimmedB = trimmedB.slice(0,indexB) + trimmedB.slice(indexB+1)
    } else {
      return false;
    }
  }
  
  return true;
}
