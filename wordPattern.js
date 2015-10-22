/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var patternStorage = {};
  var strArray = str.split(' ');
  if (pattern.length !== strArray.length) {
    return false;
  }
  for (var i = 0; i < pattern.length; i++) {
    if (!patternStorage[pattern[i]]) {
      patternStorage[pattern[i]] = strArray[i];
    } else {
      if (patternStorage[pattern[i]] !== strArray[i]) {
        return false;
      }
    }
  }
  return true;
};
