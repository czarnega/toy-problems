// Implement the insertion sort algorithm

function insertionSort(array) {
  for(let i = 0; i < array.length; i++){
    let wasInserted = false;
    for(let j = 0; j < i; j++){
    	(!wasInserted && (array[i] < array[j])) ? (array.splice(j,0,array.splice(i,1)[0]), wasInserted = true) : ''; 
    }
  } 
	return array;
}