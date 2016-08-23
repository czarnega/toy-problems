// Implement the bubble sort algorithm

function bubbleSort (arr) {
	let bubbling;
	
	do {
		bubbling = false;
		for(let i = 0; i < arr.length; i++){
			if(arr[i] > arr[i+1]){
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				bubbling = true;
			}
		}
	} while (bubbling);
	
  return arr;
}