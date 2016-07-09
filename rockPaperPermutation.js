// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
// Example: rockPaperPermutation(2); => [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
function rockPaperPermutation (roundCount) {
  var roundNumber = 0;
  var permutations = [];
  var rps = ["r","p","s"];

  function rockPaperGenerator(){
    if(permutations.length === 0){
    	permutations = rps;
    } else {
    	var tempPerms = permutations.slice();
    	permutations = [];
    	tempPerms.forEach(function(combo){
      		permutations.push(combo+"r");
      		permutations.push(combo+"p");
      		permutations.push(combo+"s");
    	});
    }
  }
  
  while(roundNumber < roundCount){
    rockPaperGenerator();
    roundNumber++;  
  }
  
  if(roundNumber === roundCount){
  	console.log("if statement");
  	  return permutations;
  }
}
