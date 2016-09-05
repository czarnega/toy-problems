// Write a function that reduces a string by removing pairs of adjacent characters.
// Sample Case 1: reduceString('aaabccddd') => 'abd'
// Sample Case 2: reduceString('baab') => 'Empty String'

function reduceString(str){
    if(str.length === 0){
        return 'Empty String';
    }
    let pairFound = false, idx = 1, pairStartIndex = null;
    while(!pairFound && idx < str.length){
        if(str[idx] === str[idx-1]){
            pairStartIndex = idx - 1;
            pairFound = true;
        }
        idx++;
    }
    if(pairFound){
        return reduceString(str.slice(0,pairStartIndex) + str.slice(pairStartIndex+2));
    } else {
        return str;
    }
}