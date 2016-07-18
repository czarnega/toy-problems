// Given a string representing a non-negative integer,
// format it to include commas.
// ex. numberFormatter("1300400") => "1,300,400"
function numberFormatter(numberString) {
	let formatted = numberString;
	if(numberString.length < 4){
		return numberString;
	}
	for(var i = formatted.length - 3; i >= 0; i -= 3){
		formatted = formatted.slice(0,i) + ',' + formatted.slice(i);
	}
	return formatted;
}