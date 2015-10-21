/**
 * @param {number[]} nums
 * @return {number}

Given an unsorted array, find the maximum difference between the 
successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers 
and fit in the 32-bit signed integer range.
 */
var maximumGap = function (nums) {
  var max = 0;
  // Return 0 if array contains less than 2 elements
  if (nums.length < 2) {
    return max;
  }
  // Sorting function not linear
  var sorted = nums.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0; i < sorted.length - 1; i++) {
    var diff = sorted[i + 1] - sorted[i];
    if (diff > max) {
      max = diff;
    }
  }
  return max;
};

console.log(maximumGap([1, 6, 9, 3, 4])); // 3
