// The removeDuplicates function should return the head of the updated linked list.
// Constraints:
// The data elements of the linked list argument will always be in non-decreasing order.
// Sample Input:
// LinkedList.head -> 1 -> 2 -> 2 -> 3 -> 3 -> 4
// Sample Output:
// 1 2 3 4
this.removeDuplicates=function(head){
	if(head){
			let prev = head;
			let current = head.next;
			let hash = {}, result = [];
			result.push(head.data)
			hash[head.data] = true;
			while(current != null) {
					if(!hash[current.data]) {
							result.push(current.data)
							hash[current.data] = true;
					} else {
							prev.next = current.next;
					}
					prev = current;
					current = current.next;
			}
			console.log(result.join(' '))
	} else {
			console.log('')
	}

		// let currentNode = head;
		// let result = [];
		// while(curretNode.next){
		//     let nextNode = currentNode.next;
		//     result.push(currentNode.data);
				

		//     currentNode = nextNode;
		//     nextNode = currentNode.next;
		// }
}