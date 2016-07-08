// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning 
// the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.
const deepEquals = (a, b) => {
  // flag if inequality found
  var areDeeplyEqual = true;
  
  function recursive(obj1, obj2){
   if(typeof obj1 !== typeof obj2) {
     areDeeplyEqual = false;
   } else {
     // first check to see if it is an array
     if(Array.isArray(obj1) && Array.isArray(obj2)){
       if(obj1.length !== obj2.length){
         areDeeplyEqual = false;
       } else {
        for(var i = 0; i < obj1.length; i++){
          recursive(obj1[i],obj2[i]);
        }
       }
     }
     // next check for objects
     if(typeof obj1 === 'object' && typeof obj2 === 'object'){
       if(Array.isArray(obj1) || Array.isArray(obj2)){
     		areDeeplyEqual = false;
     	}
       // make sure keys are the same with recursive call
       if(Object.keys(obj1).length !== Object.keys(obj2).length){
         areDeeplyEqual = false;
       } else {
       	for(var key in obj1){
       		recursive(obj1[key],obj2[key]);
       	}
       }
     }
     // then primitives
     if((Number.isInteger(obj1) && Number.isInteger(obj2)) || (typeof obj1 === 'string' && typeof obj2 === 'string') || (typeof obj1 === 'boolean' && typeof obj2 === 'boolean')){
       if(obj1 !== obj2){
         areDeeplyEqual = false;
       }
     }
   }
  }
  
  recursive(a,b);
  
  return areDeeplyEqual;
}; 