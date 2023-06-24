/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start

function checkRow(row: string[]): boolean {
  const uniq = new Set();
  for (const n of row) {
    if (n === '.') {
      continue;
    }
    if (uniq.has(n)) {
      return false;
    }
    uniq.add(n);
  }
  return true;
}

function checkCol(board: string[][], col: number): boolean {
  const uniq = new Set();
  for (let i = 0; i < board.length; i++) {
    const cell = board[i][col];
    if (cell === '.') {
      continue;
    }
    if (uniq.has(cell)) {
      return false;
    }
    uniq.add(cell);
  }
  return true;
}

function checkGrid(board: string[][], row: number, col: number): boolean {
  const uniq = new Set();
  for (let i = row; i < row + 3; i++) {
    for (let j = col; j < col + 3; j++) {
      const cell = board[i][j];
      if (cell === '.') {
        continue;
      }
      if (uniq.has(cell)) {
        return false;
      }
      uniq.add(cell);
    }
  }
  return true;
}

function isValidSudoku(board: string[][]): boolean {
  // Check rows
  for (const row of board) {
    if (!checkRow(row)) {
      return false;
    }
  }

  // Check col
  for (let i = 0; i < board.length; i++) {
    if (!checkCol(board, i)) {
      return false;
    }
  }

  // Check grid
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      if (!checkGrid(board, i, j)) {
        return false;
      }
    }
  }

  return true;
}
// @lc code=end

/**
 * O: boolean
 * I: array of array of string
 * C: NA
 * E: only check filled cells
 *
 * pseudocode
 * iterate over the rows, for each row
 *   if checkRow(current row) == false
 *     return false
 * iterate over the columns, for each column
 *   if checkCol(current column) == false
 *     return false
 * iterate over the grids, for each grid
 *   if checkGrid(grid) == false
 *     return false
 * return true
 *
 */
