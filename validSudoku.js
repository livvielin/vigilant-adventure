/**
 * @param {character[][]} board
 * @return {boolean}
 */

// checks whether a given board is valid, may be partially filled
// blank spaces have '.'
var isValidSudoku = function (board) {
  // each row across must have different numbers
  for (var row = 0; row < board.length; row++) {
    var rowNums = {};
    for (var colIndex = 0; colIndex < board[row].length; colIndex++) {
      if (board[row][colIndex] < 1 || board[row][colIndex] > 9) {
        return false;
      }
      if (rowNums[board[row][colIndex]] !== undefined) {
        return false;
      }
      rowNums[board[row][colIndex]] = true;
    }
  }
  // each column must have different numbers
  for (var col = 0; col < board[0].length; col++) {
    var colNums = {};
    for (var rowIndex = 0; rowIndex < board.length; rowIndex++) {
      if (board[rowIndex][col] < 1 || board[rowIndex][col] > 9) {
        return false;
      }
      if (colNums[board[rowIndex][col]] !== undefined) {
        return false;
      }
      colNums[board[rowIndex][col]] = true;
    }
  }
  // each 9 cell area must have different numbers
  // middle index
};
