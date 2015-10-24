/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). 
You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.
 */
var canCompleteCircuit = function(gas, cost) {
  var gasStationIndex;
  var gasLeft = 0;
  var gasStationNum = 0;
  for (var i = 0; i < gas.length; i++) {
    while (gasStationNum < gas.length) {
      // find index of current gas station
      gasStationIndex = i + gasStationNum;
      // if the gasStationIndex is outside of gas array, subtract gas.length
      if (gasStationIndex > gas.length - 1) {
        gasStationIndex -= gas.length;
      }
      gasLeft += gas[gasStationIndex];
      if (cost[gasStationIndex] > gasLeft) {
        // not enough gas!
        break;
      }
      gasLeft -= cost[gasStationIndex];
      gasStationNum += 1;
      if (gasStationNum === gas.length) {
        return i;
      }
    }
    gasLeft = 0;
    gasStationNum = 0;
  }
  // return -1 if didn't already return start
  return -1;
};

// [9, 8, 7] gas length = 3
// [8, 6, 5] cost
// gasLeft = 0, gasStationNum = 0
// i = 0, gasStationNum < gas length (0 < 3)
// gasStationIndex = 0
// start at i = 2, gasLeft and gasStationNum = 0
// gasStationIndex = 2, gasLeft = 7, cost ok, gasStationNum = 1
// gasStationIndex = 3, 3 > 2, gasStationIndex = 0

/*
start with empty tank
start at first gas station
fill up the gas at first gas station
determine if cost to get to next gas station is more than amount of gas
keep going

this should repeat gas.length times
if we reach the end of gas, should start back at the beginning
*/
