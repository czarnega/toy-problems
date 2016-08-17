// Find an index in an array such that its prefix sum equals its suffix sum.
// ex. equalSumArray([1,4,-3,0,2]) //=> 3
function equalSumArray(arr){
	var sum = 0, reverseSum = 0, index = null;
	arr.forEach(val => sum += val);
	for(let i = arr.length - 1; i >= 0; i--){
		if(sum === reverseSum){
			index = arr.length - i;
		}
		reverseSum += arr[i];
		sum -= arr[i];
	}
	return index;
} 