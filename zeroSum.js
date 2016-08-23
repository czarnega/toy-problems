// Given an array of negative/positive integers,
// return true if there exists two numbers whose sum is zero.

function zeroSum (numbers) {
  let dict = {};
  for(let num of numbers){
  	if(num > 0){
  		if(dict[(num * -1)]) return true;
  	} else {
  		if(dict[Math.abs(num)]) return true;
  	}
  	dict[num] = true;
  }
  return false;
}
