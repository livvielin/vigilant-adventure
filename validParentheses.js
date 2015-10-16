/**
 * @param {string} s
 * @return {boolean}

 Create a stack of open parens
 If the closing parens, check the top of the stack to see if correct open
 If so, remove from stack
 */
var isValid = function(s) {
  var stack = [];
  if (s.length % 2 !== 0) {
    return false;
  }
  // Iterate through s
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else if (s[i] === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    } else if (s[i] === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};

// TEST
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
