// Given a directed acyclic graph (DAG) of n nodes
// labeled from 0 to n - 1, find all possible paths
// from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list 
// of all nodes you can visit from node i 
//

function getPaths(graph, path, pathCollection, index){
  if(graph[index].length == 0){
    //pushPath(pathCollection.path)
    pathCollection.push(path.slice())
    console.log(`pathCollection is : `)
    console.log(pathCollection)
    return;
  }
  lebel:
  graph[index].forEach(elm => {
    if(elm <= index) {
      pathCollection.push(path.slice())
      return
    }
    console.log(`pushing ${elm}`) 
    path.push(elm)
    //console.log(pathCollection.arr)
    getPaths(graph, path, pathCollection, elm)
    path.pop()
    //console.log(`Path collection after popping`)
    //console.log(pathCollection.arr)
  })
  if(index == 0) return pathCollection
}

var allPathSourceTarget = function(graph){
  if(graph[0].length == 0) return []
  var allPaths = getPaths(graph, [0], [], 0)
  var allPathsToTarget = []
  var lastIndexOfGraph = graph.length - 1
  allPaths.forEach(x => {
    if(x.slice(-1) == lastIndexOfGraph){
      allPathsToTarget.push(x)
    }
  })
  return allPathsToTarget
}

var graph = [[2],[],[1]]
console.log(allPathSourceTarget(graph))

