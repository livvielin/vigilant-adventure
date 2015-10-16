/**
 * @param {number[]} nums
 * @return {number}

 [0,1,3] -> 2
 [0,1,2,3,5,6] -> 4
 if 0 is missing, return 0
 can the last number be missing?
 start with the first index and see if the next is +1

 numbers not necessarily in order
 */
var missingNumber = function(nums) {
  // // If there is nothing in nums, return null
  // if (nums.length === 0) {
  //   return null;
  // }
  // // If 0 is missing, return 0
  // if (nums[0] !== 0) {
  //   return 0;
  // }
  // // Iterate through until the end to see when increment isn't 1
  // for (var i = 0; i < nums.length - 1; i++) {
  //   if (nums[i + 1] - nums[i] !== 1) {
  //     return nums[i] + 1;
  //   }
  // }
  // // Otherwise, say the last number is missing
  // return nums.length;

  // Figure out sum of 0..n by iterating
  // Iterate through nums array to find sum
  var sumToN = nums.length; // since iterations miss last number
  var sum = 0;
  // n is length of nums array
  for (var i = 0; i < nums.length; i++) {
    sumToN += i;
    sum += nums[i];
  }
  // Return the difference between the two sums
  return sumToN - sum;
};

// TEST
console.log(missingNumber([0,1,3])); // 2
console.log(missingNumber([0,1,2,3,5])); // 4
console.log(missingNumber([0,1,2,3])); // 4
console.log(missingNumber([0,1,2,3,5,6])); //4
