// Writes functions that calculate operations such as the following:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
// - There must be a function for each number from 0 ("zero") to 9 ("nine")
// - There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// - Each calculation consist of exactly one operation and two numbers
// - The most outer function represents the left operand, the most inner function represents the right operand

function zero(operation) {
	if(arguments.length === 0){
		return 0;
	}
	return operation(0);
}
function one(operation) {
	if(arguments.length === 0){
		return 1;
	}
	return operation(1);
}
function two(operation) {
	if(arguments.length === 0){
		return 2;
	}
	return operation(2);
}
function three(operation) {
	if(arguments.length === 0){
		return 3;
	}
	return operation(3);
}
function four(operation) {
	if(arguments.length === 0){
		return 4;
	}
	return operation(4);
}
function five(operation) {
	if(arguments.length === 0){
		return 5;
	}
	return operation(5);
}
function six(operation) {
	if(arguments.length === 0){
		return 6;
	}
	return operation(6);
}
function seven(operation) {
	if(arguments.length === 0){
		return 7;
	}
	return operation(7);
}
function eight(operation) {
	if(arguments.length === 0){
		return 8;
	}
	return operation(8);
}
function nine(operation) {
	if(arguments.length === 0){
		return 9;
	}
	return operation(9);
}

function plus(innerNum){
	return function(outerNum){
		return outerNum + innerNum
	}
}
function minus(innerNum){
	return function(outerNum){
		return outerNum - innerNum
	}
}
function times(innerNum){
	return function(outerNum){
		return outerNum * innerNum
	}
}
function dividedBy(innerNum){
	return function(outerNum){
		return outerNum / innerNum
	}
}