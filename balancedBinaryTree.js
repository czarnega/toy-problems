// Write a function that checks to see if a binary tree is "depth balanced"
// A tree is "depth balanced" if the difference between the depths of any two leaf nodes is no greater than 1
// 
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

function depthBalanceChecker(root){
	let maxDepth = 1;
	let minDepth = null;
	let currentDepth = 0;

	if(!root.left && !root.right){
		return true;
	}
	
	(function recurseCheck(node){
			currentDepth++;
	
			if(node.left){
				recurseCheck(node.left)
			}
			if(node.right){
				recurseCheck(node.right);
			}
			if(!node.right && !node.left){
				maxDepth = Math.max(maxDepth,currentDepth)
				minDepth = minDepth ? Math.min(minDepth,currentDepth) : currentDepth
			}
	
			currentDepth--;
			return;	
		}(root));

	return maxDepth - minDepth <= 1;
}