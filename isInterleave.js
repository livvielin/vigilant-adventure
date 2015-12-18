/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}

Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.
 */

var isInterleave = function(s1, s2, s3) {
  // iterate through s3
  for (var c = 0; c < s3.length; c++) {
    // check if current letter in s3 is first in s1 or s2
    var current = s3[c];

    // if first letter of s1 and s2 are the same, need to try both ways

    if (current === s1[0]) {
      // remove first letter from s1
      if (s1.length === 1) {
        s1 = '';
      } else {
        s1 = s1.substring(1);
      }
    } else if (current === s2[0]) {
      // remove first letter from s2
      if (s2.length === 1) {
        s2 = '';
      } else {
        s2 = s2.substring(1);
      }
    } else {
      return false;
    }
  }
  // check if s1 and s2 have no letters left
  if (s1.length === 0 && s2.length === 0) {
    return true;
  }
  return false;
};

var str1 = "aabcc";
var str2 = "dbbca";
var str3 = "aadbbcbcac";
var str4 = "aadbbbaccc";
console.log(isInterleave(str1, str2, str3));
console.log(isInterleave(str1, str2, str4));
