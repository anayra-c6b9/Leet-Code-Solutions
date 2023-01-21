// You are given an n x n 2D matrix representing an
// image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which
// means you have to modify the input 2D matrix
// directly. DO NOT allocate another 2D matrix
// and do the rotation.

var rotate = function(matrix) {
  
  let n = matrix.length
  var i, j

  for(i = 0; i < n/2; i++){
    [matrix[i],matrix[n-1-i]] = [matrix[n-1-i], matrix[i]]
  }
  //transpose
  for(i = 0; i < n-1; i++){
    for(j = i+1; j < n; j++){
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }

  return matrix

}

console.log(rotate([[5]]))

