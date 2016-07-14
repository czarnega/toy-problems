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

// Iterative depth-first approach
function depthBalanceChecker(root){
	let depths = [];

	let nodeStack = [];
	nodeStack.push([root,0]);

	while(nodeStack.length){
		let nodeTuple = nodeStack.pop();
		let node = nodeTuple[0];
		let depth = nodeTuple[1];

		// if we find a leaf node
		if(!node.left && !node.right){
			// if depth is not in depths array
			if(depths.indexOf(depth) < 0){
				// push the depth into the depths array
				depths.push(depth);

				// check if there are more than 2 depths, or if difference between depths is > 1
				if((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)){
					// if so, return false
					return false;
				}
			}
		} else {
			if(node.left){
				nodeStack.push([node.left,depth+1])
			}
			if(node.right){
				nodeStack.push([node.right,depth+1])
			}
		}
	}
	return true;
}

// Recursive depth-first approach
// function depthBalanceChecker(root){
// 	let maxDepth = 1;
// 	let minDepth = null;
// 	let currentDepth = 0;

// 	if(!root.left && !root.right){
// 		return true;
// 	}

// 	(function recurseCheck(node){
// 			currentDepth++;
	
// 			if(node.left){
// 				recurseCheck(node.left)
// 			}
// 			if(node.right){
// 				recurseCheck(node.right);
// 			}
// 			if(!node.right && !node.left){
// 				maxDepth = Math.max(maxDepth,currentDepth)
// 				minDepth = minDepth ? Math.min(minDepth,currentDepth) : currentDepth
// 			}
	
// 			currentDepth--;
// 			return;	
// 		}(root));

// 	return maxDepth - minDepth <= 1;
// }