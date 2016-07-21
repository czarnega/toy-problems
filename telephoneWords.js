// Write a function that returns all possible T-9 letter combinations
// for a string of digits pressed.

function telephoneWords (digitString) {
  var results = [];
  function comboBuilder(string,idx) {
    if(string.length === digitString.length){
      results.push(string)
      return;
    }
    let tDigits = telephoneDigits[digitString[idx]];
    for(var i = 0; i < tDigits.length; i++){
      let index = idx + 1;
      comboBuilder(string+tDigits[i],index);
    }
  }
  comboBuilder("",0);
  return results;
}
let telephoneDigits = {
  0: ["0"],
  1: ["1"],
  2: ["A","B","C"],
  3: ["D","E","F"],
  4: ["G","H","I"],
  5: ["J","K","L"],
  6: ["M","N","O"],
  7: ["P","Q","R","S"],
  8: ["T","U","V"],
  9: ["W","X","Y","Z"]
};  