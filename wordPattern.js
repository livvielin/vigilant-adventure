/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var patternStorage = {};
  var wordStorage = {};
  var strArray = str.split(' ');
  if (pattern.length !== strArray.length) {
    return false;
  }
  for (var i = 0; i < pattern.length; i++) {
    if (!patternStorage[pattern[i]]) {
      if (wordStorage[strArray[i]]) {
        return false;
      } else {
        patternStorage[pattern[i]] = strArray[i];
        wordStorage[strArray[i]] = true;
      }
    } else {
      if (patternStorage[pattern[i]] !== strArray[i]) {
        return false;
      }
    }
  }
  return true;
};
