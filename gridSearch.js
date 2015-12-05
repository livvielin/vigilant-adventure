/**
* Grid Search
*
* Input is a grid of dimensions M x N. This grid follows certain rules:
*
*   grid[i][j] > grid[i][j-1] for 0 < j < N-1
*   grid[i][j] > grid[i-1][j] for 0 < i < M-1
*
* Find if a given number exists in this grid at all.
*/
var gridSearch = function (grid, number) {
  // values increase across rows and increase down columns
  // implement similar to binary search, starting with the center

  // recursive subroutine to find target number
  var search = function (startRow, endRow, startCol, endCol) {
    // if invalid inputs, target not found, return false
    if (startRow > endRow || startCol > endCol) {
      return false;
    }

    // find the center value
    var centerRow = Math.floor((endRow + startRow) / 2);
    var centerCol = Math.floor((endCol + startCol) / 2);
    var center = grid[centerRow][centerCol];

    // if the target value is equal to the center value, return true
    if (center === number) {
      return true;
    }
    // if the target value is greater than the center, eliminate top left quadrant
    if (number > center) {
      // search bottom rectangle
      if (search(centerRow + 1, endRow, startCol, endCol)) {
        return true;
      }
      // search right rectangle
      if (search(startRow, centerRow, centerCol + 1, endCol)) {
        return true;
      }
    }
    // if the target value is less than the center, eliminate the bottom right quadrant
    if (number < center) {
      // search top rectangle
      if (search(startRow, centerRow - 1, startCol, endCol)) {
        return true;
      }
      // search left rectangle
      if (search(centerRow, endRow, startCol, centerCol - 1)) {
        return true;
      }
    }
    // return false if not found
    return false;
  };

  // call recursive subroutine on full grid
  return search(0, grid.length - 1, 0, grid[0].length - 1);

};
