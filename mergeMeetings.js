// Write a function condenseMeetingTimes() that takes an array of meeting time ranges and returns an array of condensed ranges.
// A meeting object has attributes startTime and endTime,
// where these integers represent the number of 30-minute blocks past 9:00am.
/* Example:
var ranges = [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

condenseMeetingTimes(ranges) //=> [
	{startTime: 0, endTime: 1},
	{startTime: 3, endTime: 8},
	{startTime: 9, endTime: 12},
]
*/
// Constraints: Time Complexity < O(n^2), Space Complexity O(n)

function condenseMeetingTimes(meetingTimes){
	let mergedMeetings;
	
	let sortedTimes = meetingTimes.slice().sort((a,b) => {
		return a.startTime - b.startTime;
	})
	
	mergedMeetings = [sortedTimes[0]]

	for(let i = 1; i < sortedTimes.length; i++){
		let previousTime = sortedTimes[i-1];
		let currentTime = sortedTimes[i];
		
		if(previousTime.endTime >= currentTime.startTime){
			previousTime.endTime = Math.max(previousTime.endTime,currentTime.endTime)
		} else {
			mergedMeetings.push(currentTime)
		}
	}

	return mergedMeetings;
}