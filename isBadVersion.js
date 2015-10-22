/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    // binary search for versions
    var firstBadVersion = n;
    var findBadVersion = function (num) {
      // base case when num is first bad version
      if (!isBadVersion(num - 1) && isBadVersion(num)) {
        firstBadVersion = num;
        return;
      } else if (isBadVersion(num)) {
        findBadVersion(num / 2);
      } else if (!isBadVersion(num)) {
        findBadVersion((num + n) / 2);
      }
    };
    findBadVersion(n / 2);
    return firstBadVersion;
  };
};

// [good, good, good, good, bad, bad, bad]
// start with length / 2, which is third index
// since it is good, can look at second half only
// index should then be (length + currentIndex) / 2
// search until 
// [good, bad, bad, bad, bad, bad]
// start with length / 2, which is third index
// since it is bad, can look at first half
// new index should be index 1, which is current index / 2
