// Given a report of all student grades, return both
// the class average and the average of each student.
// NOTE: Round any calculations to the nearest 2 decimal places.

// Sample Input:
// "Jon 19 14 15 15 16\nJeremy 15 11 10 15 16\nJesse 19 17 20 19 18"
// Sample Output:
// { "all": 15.93, "Jon": 15.8, "Jeremy": 13.4, "Jesse": 18.6 }

function autograde (report) {
	let runningAverage = 0, results = {};
  let students = report.split('\n');
  students.forEach(studentLine => {
  	let studentData = studentLine.split(' ');
  	let name = studentData.splice(0,1)[0];
  	let gradeSum = studentData.map(Number).reduce(((sum,grade) => sum + grade),0)
  	let average = ( gradeSum / studentData.length).toFixed(2);
  	results[name] = parseFloat(average);
  	runningAverage += parseFloat(average);
  })
  results.all = parseFloat((runningAverage/students.length).toFixed(2));
  return results
}
