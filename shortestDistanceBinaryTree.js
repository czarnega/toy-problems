// Given a binary tree, write a method to determine shortest distance between two nodes. 
// A node does not have a pointer to its parent

var BinaryTree = function(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

BinaryTree.prototype.addLeft = function(value){
	this.left = new BinaryTree(value);
	return this.left;
}

BinaryTree.prototype.addRight = function(value){
	this.right = new BinaryTree(value);
	return this.right;
}

BinaryTree.prototype.getAncestorPath = function(target){
	// console.log(`getAncestorPath called on ${this.value}`)
	if(this.value === target){
	  return [this];
	}
	if(this.left){
		let pathFromLeft = this.left.getAncestorPath(target);
		if(pathFromLeft){
			return [this].concat(pathFromLeft);
		}
	}
	if(this.right){
		let pathFromRight = this.right.getAncestorPath(target);
		if(pathFromRight){
			return [this].concat(pathFromRight);
		}
	}
	return null;
}

BinaryTree.prototype.getClosestCommonAncestor = function(targetA, targetB){
	let pathA = this.getAncestorPath(targetA);
	let pathB = this.getAncestorPath(targetB);
	
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

let bt = new BinaryTree(5);

let btRight = bt.addRight(13);
let btRightLeft = btRight.addLeft(10);
let btRightRight = btRight.addRight(17);

let btLeft = bt.addLeft(4);
let btLeftLeft = btLeft.addLeft(1);
let btLeftRight = btLeft.addRight(7);

let LCA17 = bt.getClosestCommonAncestor(1,7);
let pathTo1 = bt.getAncestorPath(1);
console.log('pathTo1:',pathTo1)
console.log('LCA17:',LCA17)
