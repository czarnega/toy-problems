// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
// An example is the root-to-leaf path 1->2->3 which represents the number 123.
// Find the total sum of all root-to-leaf numbers.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0;
    let path = [];
    
    function recurse(node){
        if(!node){
            return;
        }
        path.push(node.val);
        if(node.left){
            recurse(node.left);
        }
        if(node.right){
            recurse(node.right);
        }
        if(!node.left && !node.right){
            sum += parseInt(path.join(''));
        }
        path.pop();
    }
    recurse(root);
    return sum;
};