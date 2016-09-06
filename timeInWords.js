// Write a program which prints the time in words for the input given in the format mentioned below.
// 5:00 -> five o'clock
// 5:15 -> quarter past five
// 5:30 -> half past five
// 5:40 -> twenty minutes to six
// 5:45 -> quarter to six
// Input is hour and minute integers, where 1 <= hour < 12, 1 <= minute < 60

function timeBuilder(hour,minutes){
	let hourString, minuteString;

	if (minutes < 30) {
		hourString = hourToString(hour);
	} else if (minutes === 30){
		hourString = hourToString(hour);
	} else {
		hourString = hourToString(hour+1);
	}
}

function minutesToString(minutes){

}

function hourToString(hour){
	switch(hour){
		case 1:
			return 'one';
		case 2:
			return 'two';
		case 3:
			return 'three';
		case 4:
			return 'four';
		case 5:
			return 'five';
		case 6:
			return 'six';
		case 7:
			return 'seven';
		case 8:
			return 'eight';
		case 9:
			return 'nine';
		case 10:
			return 'ten';
		case 11:
			return 'eleven';
		case 12:
			return 'twelve';
		default:
			return 'Invalid hour';
	}
}