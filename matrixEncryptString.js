// Write a function that encrypts a string by converting the string to a matrix,
// then printing out space separated words composed of the characters in each column.
// Example input: "if man was meant to stay on the ground god would have given us roots"
// -> "ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots"
// gives the following matrix representation:
// ifmanwas  
// meanttos          
// tayonthe  
// groundgo  
// dwouldha  
// vegivenu  
// sroots
// which yields a result of: "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau"
// Constraints, where L is the length of the string with whitespace removed:
// rows X columns >= L
// sqrt(L).floor <= rows <= columns <= sqrt(L).ceil
// 1 <= L <= 81

function matrixEncryptString(string){
	let L = string.length;
	let min = Math.floor(Math.sqrt(L))
	let max = Math.ceil(Math.sqrt(L))
	
	let matrix = new Array(min).fill().map(()=>new Array());
	
	for(let i = 0; i < min; i++){
		for(let j = 0; j < max; j++){
			if(i+j < L){
				matrix[i][j] = str[(i*max)+j]
			}
		}
	}
	
	let result = '';
	
	for(let i = 0; i < max; i++){
		let temp = '';
		for(let j = 0; j < min; j++){
			if(matrix[j][i]) temp += matrix[j][i];
		}
		result += temp + ' ';
	}
	return result.trim();
}
