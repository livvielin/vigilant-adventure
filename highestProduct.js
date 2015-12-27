// function to find highest product from three ints in array
var highestProduct = function (list) {
  var highestProductOfThree = list[0] * list[1] * list[2];
  var highestProductOfTwo = list[0] * list[1];
  var highest = Math.max(list[0], list[1]);
  var lowestProductOfTwo = list[0] * list[1];
  var lowest = Math.min(list[0], list[1]);
  // iterate through the list and find largest three numbers, and smallest two
  for (var i = 2; i < list.length; i++) {
    if (highest * list[i] > highestProductOfTwo) {
      highestProductOfTwo = highest * list[i];
    }
    if (lowest * list[i] < lowestProductOfTwo) {
      lowestProductOfTwo = lowest * list[i];
    }
    if (list[i] < lowest) {
      lowest = list[i];
    }
    if (list[i] > highest) {
      highest = list[i];
    }
    highestProductOfThree = Math.max(highestProductOfThree, highestProductOfTwo * list[i], lowestProductOfTwo * list[i]);
  }
  return highestProductOfThree;
};

console.log(highestProduct([-10,-10,1,3,2]));
