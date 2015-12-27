// function to get max profit where buying and selling once
var getMaxProfit = function (stockPrices) {
    if (stockPrices.length < 2) {
        console.log('cannot buy and sell when there is less than two prices');
    }
    var maxProfit = stockPrices[1] - stockPrices[0];
    var currentProfit;
    var currentBuyPrice = stockPrices[0];
    for (var i = 1; i < stockPrices.length; i++) {
        currentProfit = stockPrices[i] - currentBuyPrice;
        maxProfit = Math.max(currentProfit, maxProfit);
        currentBuyPrice = Math.min(currentBuyPrice, stockPrices[i]);
    }
    return maxProfit;
};

console.log(getMaxProfit([10, 7, 5, 11, 2, 19]));
console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
console.log(getMaxProfit([9, 8, 7, 6, 1]));
