/**
 * @param {string} s
 * @return {string}
Given a string which contains only lowercase letters, 
remove duplicate letters so that every letter appears once and only once. 
You must make sure your result is the smallest in lexicographical order 
among all possible results.

Example:
Given "bcabc"
Return "abc"

Given "cbacdcbc"
Return "acdb"
 */

var removeDuplicateLetters = function (s) {
  // hash table to store letters and frequencies
  var letterFrequencies = {};
  for (var c = 0; c < s.length; c++) {
    if (!letterFrequencies[s[c]]) {
      letterFrequencies[s[c]] = 1;
    } else {
      letterFrequencies[s[c]] += 1;
    }
  }
  // iterate through hash table and place letters in array
  var letters = Object.keys(letterFrequencies);
  // sort by order
  var merge = function (left, right) {
    var results = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (letterFrequencies[left[leftIndex]] <= letterFrequencies[right[rightIndex]]) {
        results.push(left[leftIndex]);
        leftIndex += 1;
      } else {
        results.push(right[rightIndex]);
        rightIndex += 1;
      }
    }
    if (leftIndex === left.length) {
      results = results.concat(right.slice(rightIndex));
    } else {
      results = results.concat(left.slice(leftIndex));
    }
    return results;
  };
  var mergeSort = function (arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var center = Math.floor(arr.length / 2);
    var left = arr.slice(0, center);
    var right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
  };
  return mergeSort(letters).join('');
};

console.log(removeDuplicateLetters('bcabc'));
console.log(removeDuplicateLetters('cbacdcbc'));
// currently works not lexicographically, but by frequency
