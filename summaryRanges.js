/**
 * @param {number[]} nums
 * @return {string[]}
Given a sorted integer array without duplicates, 
return the summary of its ranges.

For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
 */
var summaryRanges = function (nums) {
  var ranges = [];
  // if nums is only one value, return range immediately
  if (nums.length === 1) {
    ranges.push(nums[0].toString());
    return ranges;
  }
  // keep track of previous and initial
  var initial = nums[0];
  // iterate through array
  for (var i = 0; i < nums.length; i++) {
    // finish off range if on last element
    if (i === nums.length - 1) {
      // if initial is equal to current value, push only last element
      if (initial === nums[i]) {
        ranges.push(initial.toString());
      } else {
        ranges.push(initial.toString() + '->' + nums[i].toString());
      }
    }

    // if next is not current + 1, push range
    else if (nums[i + 1] !== nums[i] + 1) {
      if (nums[i] !== initial) {
        ranges.push(initial.toString() + '->' + nums[i].toString());
      } else {
        ranges.push(nums[i].toString());
      }
      // set initial to next element
      initial = nums[i + 1];
    }
  }
  return ranges;
};

console.log(summaryRanges([0,1,2,4,5,7]));
console.log(summaryRanges([0,1,2,4,5,6,7]));
