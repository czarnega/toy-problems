// Given the following set of coin values,
// find all the possible combinations of coins that sum to a target value.
// coins = [1,2,5,10,20,50,100,200]
const coinSums = (target) => {
	const coins = [1,2,5,10,20,50,100,200];
	let index = 0;
	let lookup = [1];
	while(coins[index] <= target){
		for(let i = coins[index]; i <= target; i++){
			lookup[i] = lookup[i] || 0;
			lookup[i] += lookup[i - coins[index]];
		}
		index++;
	}
	return lookup[lookup.length - 1];
}