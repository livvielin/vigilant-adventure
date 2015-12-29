// function that counts number of ways to make change
var makeChange = function (amount, denominations) {
  var count = 0;
  var findCombinations = function (sum, current) {
    // combination is greater than or equal to amount
    if (sum >= amount) {
      // if the sum equals amount, add to count
      if (sum === amount) {
        count += 1;
        console.log(current);
      }
      return;
    }
    // iterate through denominations
    for (var i = 0; i < denominations.length; i++) {
      current.push(denominations[i]);
      findCombinations(sum + denominations[i], current);
      current.pop();
    }
  };
  findCombinations(0, []);
  return count;
};

console.log(makeChange(4, [1, 2, 3]));
