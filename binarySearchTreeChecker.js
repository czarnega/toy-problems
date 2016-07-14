// Write a function to check that a binary tree is a valid binary search tree

// Binary Tree Node Class
function BinaryTreeNode(value) {
	this.value = value;
	this.left  = null;
	this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
	this.left = new BinaryTreeNode(value);
	return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
	this.right = new BinaryTreeNode(value);
	return this.right;
};

// Recursive approach
function bstChecker(root, lowerBound, upperBound){
	lowerBound = lowerBound || -Infinity;
	upperBound = upperBound || Infinity;

	if (!root) return true;

	if(root.value > upperBound || root.value < lowerBound) {
		return false;
	}

	return bstChecker(root.left,lowerBound,root.value) && bstChecker(root.right,root.value,upperBound);
}