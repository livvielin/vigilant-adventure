/**
 * @param {character[][]} matrix
 * @return {number}
 */

// function that given a 2D binary matrix filled with 0's and 1's,
// finds the largest square containing all 1's and returns its area
var maximalSquare = function (matrix) {
  // store largest area, initialize to 0
  // iterate through each value in matrix
    // store current area
    // if the value is 1, current area is 1
      // check adjacent spaces for 1s
      // if 0 is found, or index is out of bounds of matrix, log area
      // if all 1s, repeat
    // compare current area to largest, and set largest to max value
  // return largest area
};

// helper function that takes iteration number and current indices and checks
// if this particular iteration creates a new square
var largerSquare = function (matrix, iteration, row, col) {
  // helper function that tells us whether index is out of bounds or a 0
  var isValid = function (rowIndex, colIndex) {
    if (rowIndex >= matrix.length || colIndex >= matrix[0].length) {
      return false;
    }
    if (matrix[rowIndex][colIndex] === 0) {
      return false;
    }
    return true;
  };

  var valid = true;
  // check validity for all additional spaces that would make up the square
  for (var i = 0; i < iteration; i++) {
    // check vertical
    if (!isValid(row + i, col + iteration)) {
      valid = false;
    }
    // check horizontal
    if (!isValid(row + iteration, col + i)) {
      valid = false;
    }
  }
  // check diagonal
  if (!isValid(row + iteration, col + iteration)) {
    valid = false;
  }
  return valid;
};

// number of spaces to check is iteration number x 2 + 1
// check column and row of first 1 + iteration number, spanning length 1 + num

// TEST
var testMatrix = [[1, 0, 1, 0, 0],
                  [1, 0, 1, 1, 1],
                  [1, 1, 1, 1, 1],
                  [1, 0, 0, 1, 0]];
console.log(maximalSquare(testMatrix)); // should be 4