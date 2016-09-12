// The removeDuplicates function should return the head of the updated linked list.
// Constraints:
// The data elements of the linked list argument will always be in non-decreasing order.
// Sample Input:
// LinkedList.head -> 1 -> 2 -> 2 -> 3 -> 3 -> 4
// Sample Output:
// 1 2 3 4
this.removeDuplicates=function(head){
  //Write your code here
    let currentNode = head;
    let nextNode = currentNode.next;
    let result = [];
    result.push(currentNode.data);
    while(nextNode){
        let same = false;
        do {
            if(currentNode.data === nextNode.data){
                same = true;
                nextNode = nextNode.next;
            } else {
                same = false;
                currentNode.next = nextNode;
            }
        } while (same);
        currentNode = nextNode;
        result.push(currentNode.data);
        nextNode = currentNode.next;
    }
    console.log(result.join(' '))
}