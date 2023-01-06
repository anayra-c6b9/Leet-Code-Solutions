// You are given an array of n string strs, all
// of the same length. The strings can be arranged
// such that there is one on each line, making a
// grid. For example, strs = ['abc', 'bce', 'cae']
// can be arranged as:
//	a b c
//	b c e
//	c a e
// You want to delete the columns that are not 
// sorted lexicographically. In the above example
// (0-indexed), column 0 ('a', 'b', 'c') and 
// column 2 ('c', 'e', 'e') are sorted while 
// column 1 ('b', 'c', 'a') is not,
// so you would delete column 1
//

var minDeletionSize = function(strs){
  var col = strs[0].length	// col size
  var row = strs.length		// row size
  console.log(`col: ${col}\nrow: ${row}\n`)
  var deletion = 0
  var temp
  for(var j = 0; j < col; j++){    //loop for col
    console.log(`looping in column : ${j+1}`)
    for(var i = 1; i < row; i++){  //loop for row
      console.log(`comparing ${strs[i][j]} and ${strs[i-1][j]}`)
      if(strs[i].charCodeAt(j) < strs[i-1].charCodeAt(j)){
	console.log(`deletion updated`)
        deletion++
	break
      }
    }
    console.log()
  }
  return deletion
}

console.log(minDeletionSize(['cba', 'daf', 'ghi']))

