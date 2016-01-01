/*
TempTracker class
insert()—records a new temperature
get_max()—returns the highest temp we've seen so far
get_min()—returns the lowest temp we've seen so far
get_mean()—returns the mean of all temps we've seen so far
get_mode()—returns the mode of all temps we've seen so far
*/
var TempTracker = function () {
  this.tempOccurrences = Array.apply(null, Array(111)).map(Number.prototype.valueOf,0);
  this.maxOccurrences = 0;
  this.mode = null;
  this.maximum = null;
  this.minimum = null;
  this.sum = null;
  this.numTemps = 0;
};

TempTracker.prototype.insert = function (temp) {
  this.tempOccurrences[temp] += 1;
  this.numTemps += 1;
  if (this.tempOccurrences[temp] > this.maxOccurrences) {
    this.maxOccurrences = this.tempOccurrences[temp];
    this.mode = temp;
  }
  if (this.maximum === null || this.minimum === null) {
    this.maximum = temp;
    this.minimum = temp;
  } else {
    this.maximum = Math.max(this.maximum, temp);
    this.minimum = Math.min(this.minimum, temp);
  }
  this.sum += temp;
};

TempTracker.prototype.get_max = function () {
  return this.maximum;
};

TempTracker.prototype.get_min = function () {
  return this.minimum;
};

TempTracker.prototype.get_mean = function () {
  return this.sum / this.numTemps;
};

TempTracker.prototype.get_mode = function () {
  return this.mode;
};

var tempTracker = new TempTracker();
tempTracker.insert(10);
tempTracker.insert(15);
tempTracker.insert(3);
tempTracker.insert(9);
tempTracker.insert(3);
console.log(tempTracker.get_max());
console.log(tempTracker.get_min());
console.log(tempTracker.get_mean());
console.log(tempTracker.get_mode());
