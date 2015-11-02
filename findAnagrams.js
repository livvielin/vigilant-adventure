// helper function that determines whether two letters are anagrams
var isAnagram = function (str1, str2) {
  var frequencies = {};
  // iterates through all characters in str1
  // puts the string into hash table with char as key and frequency as val
  for (var i = 0; i < str1.length; i++) {
    if (frequencies[str1[i]]) {
      frequencies[str1[i]] += 1;
    } else {
      frequencies[str1[i]] = 1;
    }
  }
  // iterate through chars in str2
  for (var j = 0; j < str2.length; j++) {
    // if the char doesn't exist in frequencies, return false
    if (!frequencies[str2[j]]) {
      return false;
    }
    // if the char exists, subtract 1 from the value in frequencies
    frequencies[str2[j]] -= 1;
  }
  // iterate through frequencies to check if all values are 0
  // if all 0, then return true
  for (var letter in frequencies) {
    if (frequencies[letter] !== 0) {
      return false;
    }
  }
  return true;
};

// TEST isAnagram
// console.log(isAnagram('cat', 'dog'));
// console.log(isAnagram('dreams', 'damsre'));
// console.log(isAnagram('abcdefg', 'abc'));

var findAnagrams = function (string) {
  // object to hold anagrams
  var anagrams = {};
  // array to hold letter options
  var letters = [];
  for (var c = 0; c < string.length; c++) {
    letters.push(string[c]);
  }
  // recursive subroutine
  var find = function (current) {
    current = current || '';
    // base case
    if (current.length === string.length) {
      anagrams[current] = true;
      return;
    }
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      // recurse
      find(current + letter);
    }
  };
  // call recursive subroutine
  find();
  // iterate through anagrams and delete from anagrams if not actually an anagram
  for (var word in anagrams) {
    if (!isAnagram(string, word)) {
      delete anagrams[word];
    }
  }
  // return all anagrams as an array
  return Object.keys(anagrams);
};

// TEST
// console.log(findAnagrams('cat'));
// console.log(findAnagrams('dreams'));

// find all permutations of string.length letters
// filter out permutations with those that are actually anagrams
