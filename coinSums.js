// Given the following set of coin values,
// find all the possible combinations of coins that sum to a target value.
// coins = [1,2,5,10,20,50,100,200]
const coinSums = (target) => {
	const coins = [1,2,5,10,20,50,100,200];
	let maxCoinIDX;
	let lookupTable = [];
	for(let i = 0; i < coins.length; i++){
		if(coins[i] <= target){
			maxCoinIDX = i;
			lookupTable.push([]);
		}
	}
	for(let i = 0; i < lookupTable.length; i++){
		for(let j = 0; j <= target; j++){
			if(i === 0){
				lookupTable[i].push(1);
			} else {
				let topValue = lookupTable[i-1][j] ? lookupTable[i-1][j] : 1;
				let twoLeftValue = (j >= coins[i]) ? lookupTable[i][j-coins[i]] : 0;
				lookupTable[i].push(topValue+twoLeftValue);
			}
		}
	}
	
	return lookupTable[maxCoinIDX][target];
}