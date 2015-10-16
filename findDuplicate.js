/**
 * @param {number[]} nums
 * @return {number}

Given an array nums containing n + 1 integers where each integer is between 1 and n 
(inclusive), prove that at least one duplicate number must exist. Assume that there is 
only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

if n is 3, no duplicate sum should be 6
[1,2,3,3]
sum is 9, dup 3, diff 3
[1,2,2,2]
sum is 7, dup 2, diff 1
[1,1,1,1]
sum is 4, dup 1, diff 2
[1,2,1,1]
sum is 5, dup 1, diff 1
[1,2,2,3]
sum is 8, dup 2, diff 2
[2,2,2,2]
sum is 8, dup 2, diff 2
[2,2,2,3]
sum is 9, dup 2, diff 3

[1,2] sum 3
[1,1] sum 2
[2,2] sum 4

[1,2,3] sum 6
[1,1,1] sum 3 dup 1 diff 3
[2,2,2] sum 6 dup 2 diff 0
[3,3,3] sum 9 dup 3 diff 3
[1,2,2] sum 5 dup 2 diff 1
[1,3,3] sum 7 dup 3 diff 1
[2,1,1] sum 4 dup 1 diff 2
 */
var findDuplicate = function(nums) {
  
};
