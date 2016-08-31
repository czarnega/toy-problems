// Create a function that prints all positive integer solutions to the equation
// a^3 + b^3 = c^3 + d^3, where a,b,c,d are integers between 1 and 1,000

function quadCube(){
	let n = 50;
	let dict = {};
	
	for(let c = 1; c <= n; c++){
		for(let d = 1; d <= n; d++){
			let result = Math.pow(c,3) + Math.pow(d,3);
			if(dict[result]){
				dict[result].push(`${c},${d}`)
			} else {
				dict[result] = [ `${c},${d}` ]
			}
		}
	}
	
	for(let key in dict){
		dict[key].forEach(pair1 => {
			dict[key].forEach(pair2 => {
				console.log(`${pair1},${pair2}`)
			})
		})
	}
}


