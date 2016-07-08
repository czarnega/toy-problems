// Given an array of arbitrarily nested arrays, return n, 
// where n is the deepest level that contains a non-array value.
function arrayception (array) {
  let currentDeepest = 0;
  let n = 0;
  
  function recurse(value){
    if(Array.isArray(value) && value.length > 0){
      n++;
      if(n > currentDeepest){
        currentDeepest = n;
      }
      for(var i = 0; i < value.length; i++){
        recurse(value[i])
      }
      n--;
    }
    return;
  }
  
  recurse(array)
  
  return currentDeepest;
}