/**
 * @param {number[]} prices
 * @return {number}
 Say you have an array for which the ith element is the price 
 of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like 
(ie, buy one and sell one share of the stock multiple times). 
However, you may not engage in multiple transactions at the same time 
(ie, you must sell the stock before you buy again).
 */
var maxProfit = function (prices) {
  var profit = 0;
  var canBuy = true;
  var currentDay = 0;
  var lastBuyPrice = 0;

  // function to return next time to buy
  var buy = function (startIndex) {
    // best time to buy is lowest price before price increases
    for (var i = startIndex; i < prices.length - 1; i++) {
      if (prices[i] < prices[i + 1]) {
        return i;
      }
    }
    return prices.length;
  };

  // function to return next time to sell
  var sell = function (startIndex) {
    // best time to sell is highest price before price decreases
    for (var i = startIndex + 1; i < prices.length - 1; i++) {
      if (prices[i] > prices[i + 1]) {
        return i;
      }
    }
    return prices.length;
  };

  // iterate through the array
  while (currentDay < prices.length) {
    // if time to buy, find next buy date, otherwise find next sell date
    if (canBuy) {
      var nextBuy = buy(currentDay);
      // if there's a valid buy date, buy stock on that day
      if (nextBuy !== prices.length) {
        lastBuyPrice = prices[nextBuy];
        canBuy = false;
      }
      // set current day to buy date
      currentDay = nextBuy;
    } else {
      var nextSell = sell(currentDay);
      // if there's a valid next sell date, sell and add profit
      if (nextSell !== prices.length) {
        profit += prices[nextSell] - lastBuyPrice;
        canBuy = true;
      } else if (nextSell === prices.length && prices[prices.length - 1] > lastBuyPrice) {
        profit += prices[prices.length - 1] - lastBuyPrice;
      }
      // set current day to sell date
      currentDay = nextSell;
    }
  }
  return profit;
};

console.log(maxProfit([5, 8, 9, 1, 3, 2, 9])); // should return 13
console.log(maxProfit([9, 8, 7, 6, 5])); // should return 0
console.log(maxProfit([9, 8, 7, 11])); // should return 4
