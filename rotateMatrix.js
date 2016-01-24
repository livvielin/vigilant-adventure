var rotateMatrix = function (matrix) {
  var result = [];
  // iterate through columns starting with last column
  for (var col = matrix[0].length - 1; col >= 0; col--) {
    var newRow = [];
    // iterate through rows
    for (var row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    result.push(newRow);
  }
  return result;
};

var m = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];
console.log(rotateMatrix(m));
