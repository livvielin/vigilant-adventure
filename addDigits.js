/**
 * @param {number} num
 * @return {number}
 given non-negative num, repeatedly add digits until only one digit

 try in constant time, no loop or recursion

 38 -> 11 -> 2
 %2 = 0, %3 = 2, %4 = 2, %5 = 3, %6 = 2, %7 = 3, %8 = 6, %9 = 2
 
 14 -> 5
 %2 = 0, %3 = 2, %4 = 2, %5 = 4, %6 = 2, %7 = 0, %8 = 6, %9 = 5
 
 98 -> 17 -> 8
 %2 = 0, %3 = 2, %4 = 2, %5 = 3, %6 = 2, %7 = 0, %8 = 2, %9 = 8
 
 102 -> 3
 %2 = 0, %3 = 0, %4 = 2, %5 = 2, %6 = 0, %7 = 4, %8 = 6, %9 = 3
 
 999 -> 27 -> 9
 %9 = 0
 
 15 -> 6
 %9 = 6

 36 -> 9
 %9 = 0
 */
var addDigits = function(num) {
  var nine = num % 9;
  if (nine === 0 && num !== 0) {
    return 9;
  } else {
    return nine;
  }
};