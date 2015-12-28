// function to condense meeting time ranges
// input: array of tuples representing meeting times
// integers in tuples represent 30-min blocks past 9am
// output: condensed ranges
// example: [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
// -> [(0, 1), (3, 8), (9, 12)]
// meetings not necessarily in order
var condenseMeetingTimes = function (ranges) {
  var condensedTimes = [];
  // start by sorting the meetings, assume helper function
  var sortedMeetings = ranges;
  var previousStart = sortedMeetings[0][0];
  var previousEnd = sortedMeetings[0][1];
  // iterate through sorted meetings
  for (var i = 1; i < sortedMeetings.length; i++) {
    var currentStart = sortedMeetings[i][0];
    var currentEnd = sortedMeetings[i][1];
    if (currentStart <= previousEnd) {
      // merge times
      previousEnd = Math.max(previousEnd, currentEnd);
    } else {
      // add time to condensedTimes and set new previous
      condensedTimes.push([previousStart, previousEnd]);
      previousStart = currentStart;
      previousEnd = currentEnd;
    }
  }
  condensedTimes.push([previousStart, previousEnd]);
  return condensedTimes;
};

// sorted input
console.log(condenseMeetingTimes([[0, 1], [3, 5], [4, 8], [9, 10], [10, 12]]));
console.log(condenseMeetingTimes([[1, 2], [2, 3]]));
console.log(condenseMeetingTimes([[1, 5], [2, 3]]));
