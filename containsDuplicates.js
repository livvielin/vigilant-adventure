/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 Given an array of integers and an integer k, 
 find out whether there are two distinct indices i and j in the array
 such that nums[i] = nums[j] and the difference between i and j is at most k.
 */
var containsNearbyDuplicate = function (nums, k) {
  // hash table to store element values as keys, and index as value
  var elements = {};
  // iterate through array
  for (var i = 0; i < nums.length; i++) {
    // check if element exists in hash table
    if (elements[nums[i]] !== undefined) {
      // if so, see if difference between indices is less than or equal to k
      if (i - elements[nums[i]] <= k) {
        return true;
      }
    }
    elements[nums[i]] = i;
  }
  return false;
};
