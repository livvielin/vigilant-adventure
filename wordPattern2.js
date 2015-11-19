function wordpattern(pattern, input) {
  // handle edge case where input is empty
  if (input.length === 0) {
    return 0;
  }
  // handle edge case where input is not at least as long as pattern
  if (input.length <= pattern.length) {
    return 0;
  }
  
  // save patterns in hash map
  var patterns = {};
  
  // set default for patterns hash map
  var fillPatterns = function () {
    // iterate through pattern
    for (var c  = 0; c < pattern.length; c++) {
      // add to pattern map with value of empty string
      if (!patterns[pattern[c]]) {
        patterns[pattern[c]] = '';
      }
    }
  };
  
  // call function to fill pattern hash map
  fillPatterns();
  
  // helper function to check if pattern matches, takes a hash map of patterns as input
  var check = function () {
    var patternString = '';
    // iterate through pattern
    for (var i = 0; i < pattern.length; i++) {
      // search for pattern in patterns and add to pattern string
      if (!patterns[pattern[i]]) {
        return false;
      }
      patternString += patterns[pattern[i]];
    }
    return patternString === input;
  };

  // recursive subroutine to break up input string
  var find = function () {
    // iterate through patterns
    for (var p in patterns) {
      // fill patterns with possible words recursively
    }
  };

  // call recursive subroutine
  // find();
}

console.log(wordpattern('abba', 'redbluebluered')); // should return 1
console.log(wordpattern('abba', 'abcxyzxyzabc')); // should return 1
console.log(wordpattern('abba', 'redredredred')); // should return 0
console.log(wordpattern('aaaa', 'redbluebluered')); // should return 0
console.log(wordpattern('abca', 'agonoa')); // should return 1
console.log(wordpattern('abac', 'anotherpanotherd')); // should return 1
