// Given two rectangle objects with the following properties: leftX, bottomY, width, and height,
// determine if the rectangles intersect, and if so, return the rectangle object of the intersection.
// Example:
// rectangleA = { leftX: -6, bottomY: 0, width: 8, height: 8 }
// rectangleB = { leftX: 1, bottomY: 5, width: 4, height: 10 }
// rectangularIntersection(rectangleA, rectangleB) //=> { leftX: 1, bottomY: 5, width: 1, height: 3 }
// *Return null if the two rectangles do not intersect
function rectangularIntersection(rectangleA, rectangleB){
	let intersection = {};

	findXOverlap(rectangleA,rectangleB)
	findYOverlap(rectangleA,rectangleB)

	function findXOverlap(A,B){
		// case if rectangleA is further left of rectangleB
		if(A.leftX < B.leftX){
			if(A.leftX + A.width > B.leftX){
				intersection.leftX = B.leftX;
				intersection.width = A.leftX + A.width - B.leftX;
			} else {
				return null;
			}
		}
		// case if B is further left of A
		else if(A.leftX > B.leftX){
			if(B.leftX + B.width > A.leftX){
				intersection.leftX = A.leftX;
				intersection.width = B.leftX + B.width - A.leftX;
			} else {
				return null;
			}
		}
		// case if rectangles have same starting leftX
		else {
			intersection.leftX = A.leftX;
			intersection.width = Math.min(A.width,B.width);
		}
	}

	function findYOverlap(A,B){
		// case if A is lower than B
		if(A.bottomY < B.bottomY){
			if(A.bottomY + A.height > B.bottomY){
				intersection.bottomY = B.bottomY;
				intersection.height = A.bottomY + A.height - B.bottomY;
			} else {
				return null;
			}
		}
		// case if B is lower than A
		else if(A.bottomY > B.bottomY){
			if(B.bottomY + B.height > A.bottomY){
				intersection.bottomY = A.bottomY;
				intersection.height = B.bottomY + B.height - A.bottomY;
			} else {
				return null;
			}
		}
		// case if rectangles have same starting bottomY
		else {
			intersection.bottomY = A.bottomY;
			intersection.height = Math.min(A.height,B.height);
		}
	}
	return Object.keys(intersection).length === 4 ? intersection : null;
}


// // case if rectangleA is further left of rectangleB
// if(rectangleA.leftX < rectangleB.leftX){
// 	if(rectangleA.leftX + rectangleA.width > rectangleB.leftX){
// 		intersection.leftX = rectangleB.leftX;
// 		intersection.width = rectangleA.leftX + rectangleA.width - rectangleB.leftX;
// 	} else {
// 		return null;
// 	}
// }
// // case if rectangleB is further left of rectangleA
// else if(rectangleA.leftX > rectangleB.leftX){
// 	if(rectangleB.leftX + rectangleB.width > rectangleA.leftX){
// 		intersection.leftX = rectangleA.leftX;
// 		intersection.width = rectangleB.leftX + rectangleB.width - rectangleA.leftX;
// 	} else {
// 		return null;
// 	}
// }
// // case if rectangles have same starting leftX
// else {
// 	intersection.leftX = rectangleA.leftX;
// 	intersection.width = Math.min(rectangleA.width,rectangleB.width);
// }