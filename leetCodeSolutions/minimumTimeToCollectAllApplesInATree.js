// Given an undirected tree consisting
// of n vertices numbered from 0 to n-1,
// which has some apples in their vertices.
// You spend 1 second to walk over one edge
// of the tree. Return the minimum time
// in seconds you have to spend to collect
// all apples in the tree, starting at
// vertex 0 and coming back to this vertex.

// The edges of the undirected tree are
// given in the array edges, where
// edges[i] = [ai, bi] means that exists
// an edge connecting the vertices ai and bi.
// Additionally, there is a boolean array
// hasApple, where hasApple[i] = true means
// that vertex i has an apple; otherwise,
// it does not have any apple.

var minTime = function(n, edges, hasApple) {

  let graph = new Array(n).fill().map(x => Array())
  // graph = [[1,3],[2],[],[]]
  for(var i = 0; i < n-1; i++){
    graph[edges[i][0]].push(edges[i][1])
  }

  let count = 0
  let depth = -1
  let temp = -1
  let flag = false
  const _countTime = (index) => {
    depth++
    temp++

    if(hasApple[index]){
      count += 2*depth
      depth = 0
      flag = true
    }
    if(!graph[index]){
      if(depth != 0) depth--
      return
    }

    for(var i = 0; i < graph[index].length; i++){
      _countTime(graph[index][i])
    }
   
    if(depth != 0) depth--
  }

  _countTime(0,0)	
  if(hasApple.includes(true) && !flag) return 2*temp
  return count
}

console.log(minTime(4, [[0,2],[0,3],[1,2]], [false,true,false,false]))

