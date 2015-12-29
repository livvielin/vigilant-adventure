var memo = {};

// function that counts number of ways to make change
var makeChange = function (amountLeft, denominationsLeft) {
  // check if memo contains answer
  var memoKey = [amountLeft, denominationsLeft];
  if (memo[memoKey] !== undefined) {
    return memo[memoKey];
  }
  // base case: amount is correct
  if (amountLeft === 0) {
    return 1;
  }
  // base case: change greater than amount
  if (amountLeft < 0) {
    return 0;
  }
  // no more denominations
  if (denominationsLeft.length === 0) {
    return 0;
  }
  // choose current denomination
  var currentCoin = denominationsLeft[0];
  var remainingCoins = denominationsLeft.slice(1);

  var count = 0;
  while (amountLeft >= 0) {
    count += makeChange(amountLeft, remainingCoins);
    amountLeft -= currentCoin;
  }
  // save answer in memo
  memo[memoKey] = count;
  return count;
};

console.log(makeChange(4, [1, 2, 3]));

var makeChange2 = function (amount, denominations) {
  // create ways array
  var ways = [1];
  for (var n = 1; n < amount + 1; n++) {
    ways.push(0);
  }
  for (var i = 0; i < denominations.length; i++) {
    for (var j = denominations[i]; j < amount + 1; j++) {
      var remainder = j - denominations[i];
      ways[j] += ways[remainder];
    }
  }
  return ways[amount];
};

console.log(makeChange2(4, [1, 2, 3]));
