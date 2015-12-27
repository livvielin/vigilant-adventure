// function to get products of all ints in array except int at that index
// does not use division
var getProducts = function (arr) {
  var products = [];
  var productSoFar;
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      products.push(1);
    } else {
      products.push(arr[i - 1] * products[i - 1]);
    }
  }
  for (var j = arr.length - 1; j >= 0; j--) {
    if (j === arr.length - 1) {
      productSoFar = 1;
    } else {
      productSoFar *= arr[j + 1];
    }
    products[j] = productSoFar * products[j];
  }
  return products;
};

console.log(getProducts([1, 7, 3, 4]));
console.log(getProducts([3, 1, 2, 5, 6, 4]));
