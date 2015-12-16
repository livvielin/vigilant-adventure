// function where if an element in an MxN matrix is 0,
// its entire row and column are set to 0
var zeroMatrix = function (matrix) {
  // store locations of 0s
  var zeroes = {};
  // iterate through each row
  for (var row = 0; row < matrix.length; row++) {
    // iterate through each column in the row
    for (var col = 0; col < matrix[0].length; col++) {
      // if the value is 0, store location
      if (matrix[row][col] === 0) {
        zeroes[row] = zeroes[row] || [];
        zeroes[row].push(col);
      }
    }
  }
  // iterate through zeroes keys and set rows and cols to 0
  for (rowIndex in zeroes) {
    // iterate through the row and set all to 0
    for (var j = 0; j < matrix[0].length; j++) {
      matrix[rowIndex][j] = 0;
    }
    // iterate through the col and set all to 0
    for (var index = 0; index < zeroes[rowIndex].length; index++) {
      for (var i = 0; i < matrix.length; i++) {
        matrix[i][zeroes[rowIndex][index]] = 0;
      }
    }
  }
  console.log(matrix);
};

zeroMatrix([[1, 2, 3, 0], [0, 5, 6, 7], [7, 8, 9, 10]]);
