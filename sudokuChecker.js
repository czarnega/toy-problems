// Check to see if we have a legitimate sudoku board
// Every row must have 1-9 
// Every column must have 1-9
// Every 3x3 section must have 1-9
// Given a board string separated by new line characters
const sudokuChecker = (boardString) => {
	// converts boardString into 9x9 matrix
	const sudokuBoard = boardString.split('\n').map(row => row.split(''));
	// check each row
	// check each column
	// check each section
	return checkRows(sudokuBoard) && checkColumns(sudokuBoard) && checkSections(sudokuBoard) ? 'solved' : 'invalid';
}

function checkRows(board){
	// iterate through each row
	for(let i = 0; i < board.length; i++){
		// get sorted value of each row
		let currentRow = board[i].slice();
		// check and see if sorted value is 1-9
		if(currentRow.sort().join(',') !== '1,2,3,4,5,6,7,8,9') {
			return false;
		}
	}
	return true;
}

function checkColumns(board){
	var currentColumn;

	for(var i = 0; i < board.length; i++){
		currentColumn = [];
		for(var j = 0; j < board.length; j++){
			currentColumn.push(board[i][j])
		}
		if(currentColumn.sort().join(',') !== '1,2,3,4,5,6,7,8,9') {
			return false;
		}
	}
	return true;
}

function checkSections(board){
	return createSection(board,0,0)
		&& createSection(board,3,0)
		&& createSection(board,6,0)
		&& createSection(board,0,3)
		&& createSection(board,0,6)
		&& createSection(board,3,3)
		&& createSection(board,3,6)
		&& createSection(board,6,3)
		&& createSection(board,6,6);
}

function createSection(board, startingX, startingY){
	let currentSection = [];
	for(let i = startingX; i < startingX + 3; i++){
		for(let j = startingY; j < startingY + 3; j++){
			currentSection.push(board[i][j]);
		}
	}
	if(currentSection.sort().join(',') !== '1,2,3,4,5,6,7,8,9') {
		return false;
	}
	return true;
}
