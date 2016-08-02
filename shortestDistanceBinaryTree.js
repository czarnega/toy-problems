// Given a binary tree, write a method to determine shortest distance between two nodes. 
// A node does not have a pointer to its parent

const getAncestorPath = (root, target) => {
  if(root === target){
    return [root];
  }
  if(root.left){
  	let pathFromLeft = getAncestorPath(root.left,target);
  	if(pathFromLeft){
  		return [root].concat(pathFromLeft);
  	}
  }
  if(root.right){
  	let pathFromRight = getAncestorPath(root.right,target);
  	if(pathFromRight){
  		return [root].concat(pathFromRight);
  	}
  }
  return null;
}

const getClosestCommonAncestor = (root, targetA, targetB) => {
  let pathA = getAncestorPath(root, targetA);
  let pathB = getAncestorPath(root, targetB);
  
  if (!pathA || !pathB){
    return null;
  }

  let shortestLength = Math.min(pathA.length,pathB.length);
  let closestAncestor = null;

  for(let i = 0; i < shortestLength; i++){
    if(pathA[i] === pathB[i]){
      closestAncestor = pathA[i];
    }
  }
  return closestAncestor;
}
