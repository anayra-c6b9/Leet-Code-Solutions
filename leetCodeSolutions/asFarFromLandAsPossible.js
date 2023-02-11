// Given an n x n grid containing only
// values 0 and 1, where 0 represents
// water and 1 represents land, find a
// water cell such that its distance to
// the nearest land cell is maximized,
// and return the distance. If no land
// or water exists in the grid, return -1.

// The distance used in this problem is
// the Manhattan distance: the distance
// between two cells (x0, y0) and
// (x1, y1) is |x0 - x1| + |y0 - y1|.

class Queue {
  constructor(){
    this.list = []
  }
  enqueue(param){
    this.list.push(param)
  }
  dequeue(){
    return this.list.shift()
  }
  isEmpty(){
    return (!this.list.length)
  }
}

var maxDistance = function(grid) {

  const n = grid.length
  let queue = new Queue()
  let haswater = false
  let result = 0
  
  const _search = (param1, param2) => {
    
  }

  for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      if(grid[i][j]){
	queue.enqueue([i,j,0])
      } else haswater = true
    }
  }

  if(!haswater || queue.isEmpty())
    return -1

  const moves = [[-1,0],[0,-1],[1,0],[0,1]]

  while(!queue.isEmpty()){
    const [x, y, dist] = queue.dequeue()
    result = Math.max(result, dist)
    moves.forEach(move => {
      if((x+move[0] >= 0) && (y+move[1] >= 0) &&
	 (x+move[0] < n) && (y+move[1] < n) &&
	 !grid[x+move[0]][y+move[1]]){
	queue.enqueue([x+move[0], y+move[1], dist+1])
	grid[x+move[0]][y+move[1]] = 1
      }
    })
  }

  return result

}

console.log(maxDistance([[1,0,1],[0,0,0],[1,0,1]]))

