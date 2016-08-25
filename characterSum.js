// Given a string of arbitrary size, convert each character 
// into its integer equivalent and sum the entirety.
function charSum (str) {
  let sum = 0;
  let reg = new RegExp('^[0-9]+$');
  for(let i = 0; i < str.length; i++){
    if(reg.test(str[i])){
      sum += parseInt(str[i]);
    }
  }
  return sum;
}
