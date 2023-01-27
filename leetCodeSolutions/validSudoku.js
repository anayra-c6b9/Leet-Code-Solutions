// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated
// according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid
// must contain the digits 1-9 without repetition.

// Note:

// A Sudoku board (partially filled) could be
// valid but is not necessarily solvable.
// Only the filled cells need to be validated
// according to the mentioned rules.

var isValidSudoku = function(board) {
  
  for(var i = 0; i < 9; i++){
    // checking for duplication in row
    let coll = []
    for(var j = 0; j < 9; j++){
      if(board[i][j] == ".") continue
      if(coll.includes(board[i][j])){
	return false
      }
      coll.push(board[i][j])
    }
    // checking for duplication in col
    coll = []
    for(var j = 0; j < 9; j++){
      console.log(`\nINDEX: ${j}, ${i}\nCURRENT CONTENT: ${board[j][i]}`)
      console.log(`=== CURRENT COLUMN COLLECTION ===`)
      console.log(coll)
      if(board[j][i] == ".") continue
      if(coll.includes(board[j][i])){
	return false
      }
      coll.push(board[j][i])
	
    }

    // checking for duplication in block
    let x, y
    coll = []
    for(var j = 0; j < 9; j++){
      x = Math.floor(j/3)+Math.floor(i/3)*3
      y = (i%3)*3 + j%3
      console.log(`boardCheck: x : ${x}, y : ${y}`)
      if(board[x][y] == ".") continue
      if(coll.includes(board[x][y])){
	return false
      }
      coll.push(board[x][y])
    }
  } 

  return true

}

console.log(isValidSudoku(
[[".",".","4",".",".",".","6","3","."],
 [".",".",".",".",".",".",".",".","."],
 ["5",".",".",".",".",".",".","9","."],
 [".",".",".","5","6",".",".",".","."],
 ["4",".","3",".",".",".",".",".","1"],
 [".",".",".","7",".",".",".",".","."],
 [".",".",".","5",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."]]
))


