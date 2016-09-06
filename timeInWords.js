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
		if(minutes === 1 || minutes === 59){
			minuteString += ' minute ';
		} else if (minutes === 15 || minutes === 45){
			minuteString += ' ';
		} else if (minutes === 0){
			return hourString + ' o\' clock';
		} else {
			minuteString += ' minutes ';
		}
		return minuteString + 'past ' + hourString;
	} else if (minutes === 30){
		hourString = hourToString(hour);
		return 'half past ' + hourString;
	} else {
		hourString = hourToString(hour+1);
		minuteString = minutesToString(60 - minutes);
		if(minutes === 1 || minutes === 59){
			minuteString += ' minute ';
		} else if (minutes === 15 || minutes === 45){
			minuteString += ' ';
		} else {
			minuteString += ' minutes ';
		}
		return minuteString + 'to ' + hourString;
	}
}

function minutesToString(minutes){
	if(minutes <= 20){
		switch(minutes){
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
			case 13:
				return 'thirteen';
			case 14:
				return 'fourteen';
			case 15:
				return 'quarter';
			case 16:
				return 'sixteen';
			case 17:
				return 'seventeen';
			case 18:
				return 'eighteen';
			case 19:
				return 'nineteen';
			case 20:
				return 'twenty';
			default:
				return 'Invalid minutes';
		}
	} else {
		return 'twenty ' + minutesToString(minutes - 20);
	}
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