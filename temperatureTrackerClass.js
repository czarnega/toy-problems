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
	this.temperatures = {
		total: 0,
	};
	this.maxTemperature = null;
	this.minTemperature = null;
	this.meanTemperature = null;
	this.mode = null;
}

TemperatureTracker.prototype.insert = function(temp){
	if(typeof temp !== 'number' || temp < 0 || temp > 110){
		return 'Error, temperature must be a number between 0 and 110'
	}
	// increase counter on temp
	this.temperatures[temp] = this.temperatures[temp] ? this.temperatures[temp] + 1 : 1;
	this.temperatures.total = this.temperatures.total + 1;

	this.maxTemperature = (this.maxTemperature !== null) ? Math.max(this.maxTemperature,temp) : temp;
	this.minTemperature = (this.minTemperature !== null) ? Math.min(this.minTemperature,temp) : temp;
	this.meanTemperature = (this.meanTemperature !== null) ? ((this.meanTemperature * (this.temperatures.total - 1) + temp)/(this.temperatures.total)) : temp;
	this.mode = (this.mode !== null) ? (this.temperatures[temp] > this.mode.count ? this.mode = {temp, count: this.temperatures[temp]} : this.mode) : { temp, count: 1 };
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