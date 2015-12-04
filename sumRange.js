/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  var sum = 0;
  for (var index = i; index <= j; index++) {
    sum += this.nums[index];
  }
  return sum;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

 // var numArray = new NumArray([1, 3, 5, 8, 9]);
 // console.log(numArray.sumRange(0, 1));
