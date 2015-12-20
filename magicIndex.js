// given an index in an array A[0...n-1] is defined to be an index such that
// A[i] === i, given a sorted array of distinct integers, write a method
// to find a magic index, if one exists, in array A
// challenge: what if elements are not distinct?
var magicIndex = function (arr, low, high) {
  // brute force: iterate through entire array to check each index
  // return index matches element value, but return -1 if no matches
  // more efficient: binary search type strategy

  // set defaults for low and high
  low = low || 0;
  high = high || arr.length - 1;
  // set middle
  var middle = Math.floor((low + high) / 2);
  // return magic index if middle index matches middle element value
  if (middle === arr[middle]) {
    return middle;
  }
  // if low and high are not valid, return -1
  if (low >= high) {
    return -1;
  }
  // if middle index is less than middle element value, check left
  if (middle < arr[middle]) {
    return magicIndex(arr, low, middle - 1);
  }
  // if middle index is greater than middle elment value, check right
  if (middle > arr[middle]) {
    return magicIndex(arr, middle + 1, high);
  }
};

console.log(magicIndex([-1, 0, 1, 2, 4]));
console.log(magicIndex([2, 4, 5, 6, 8]));
