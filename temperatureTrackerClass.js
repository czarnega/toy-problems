// Write a class TempTracker with these methods:
// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean of all temps we've seen so far
// getMode()—returns the mode of all temps we've seen so far
/*--  Notes:  --*/
// * Optimize for space and time. 
// * Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.
// * Temperatures will all be inserted as integers. 
// * We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..110.
// * If there is more than one mode, return any of the modes.

var TemperatureTracker = function(){
	// For tracking Max and Min temperatures
	this.maxTemperature = null;
	this.minTemperature = null;
	// For tracking Mean temperature
	this.numberOfTemperatures = 0;
	this.sumOfTemperatures = 0;
	this.meanTemperature = null;
	// For tracking Mode of temperatures
	this.temperatureOccurrences = new Array(111).fill(0);
	this.mostOccurrences = 0;
	this.mode = null;
}

TemperatureTracker.prototype.insert = function(temp){
	// Return an error if temperature provided is not a number, or not between 0 and 110
	if(typeof temp !== 'number' || temp < 0 || temp > 110){
		return 'Error, temperature must be a number between 0 and 110'
	}
	// Calculate new Mean temperature
	this.numberOfTemperatures++;
	this.sumOfTemperatures += temp;
	this.meanTemperature = this.sumOfTemperatures / this.numberOfTemperatures;

	// Determine if mode has changed
	this.temperatureOccurrences[temp]++;
	// If occurences for provided temp is higher than mostOccurrences
	if(this.temperatureOccurrences[temp] > this.mostOccurrences){
		this.mostOccurrences = this.temperatureOccurrences[temp];
		this.mode = temp;
	}
	// Determine if there are new Max or Min temperatures
	this.maxTemperature = (this.maxTemperature !== null) ? Math.max(this.maxTemperature,temp) : temp;
	this.minTemperature = (this.minTemperature !== null) ? Math.min(this.minTemperature,temp) : temp;
}

TemperatureTracker.prototype.getMax = function(){
	return this.maxTemperature;
}

TemperatureTracker.prototype.getMin = function(){
	return this.minTemperature;
}

TemperatureTracker.prototype.getMean = function(){
	return this.meanTemperature;
}

TemperatureTracker.prototype.getMode = function(){
	return this.mode.temp;
}