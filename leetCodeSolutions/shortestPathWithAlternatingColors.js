// You are given an integer n, the number of nodes
// in a directed graph where the nodes are labeled
// from 0 to n - 1. Each edge is red or blue in
// this graph, and there could be self-edges and
// parallel edges.

// You are given two arrays redEdges and blueEdges
// where:
//    redEdges[i] = [ai, bi] indicates that there
//    is a directed red edge from node ai to node
//    bi in the graph, and
//    blueEdges[j] = [uj, vj] indicates that there
//    is a directed blue edge from node uj to node
//    vj in the graph.

// Return an array answer of length n, where each
// answer[x] is the length of the shortest path 
// from node 0 to node x such that the edge colors
// alternate along the path, or -1 if such a path
// does not exist.

class Queue {
  constructor(){
    this.collection = []
  }
  enqueue(item){
    this.collection.push(item)
  }
  dequeue(){
    return this.collection.shift()
  }
  isEmpty(){
    if(!this.collection.length)
      return true
    return false
  }
}

var shortestAlternatingPaths = function(n, redEdges, blueEdges) {

  let output = new Array(n).fill(-1)
  output[0] = 0

  redEdges = redEdges.reduce((hash, node) => {
    hash[node[0]] = hash[node[0]] || []
    hash[node[0]].push(node[1])
    return hash
  }, {})
  blueEdges = blueEdges.reduce((hash, node) => {
    hash[node[0]] = hash[node[0]] || []
    hash[node[0]].push(node[1])
    return hash
  }, {})

  redEdges.visited = []
  blueEdges.visited = []

  const edge = {
    '1' : redEdges,
    '-1' : blueEdges
  }  

  let queue = new Queue()
  
  if(redEdges[0]){
    redEdges[0].forEach(x => {
      queue.enqueue([x, -1, 1])
    })
  }
  if(blueEdges[0]){
    blueEdges[0].forEach(x => {
      queue.enqueue([x, 1, 1])
    })
  }

  while(!queue.isEmpty()){
    const [node, next, dist] = queue.dequeue()
    if(edge[next].visited.includes(node)) continue
    edge[next].visited.push(node)
    if(output[node] == -1)
      output[node] = dist
    if(edge[next][node]){
      edge[next][node].forEach(x => {
	queue.enqueue([x, -1*next, dist+1])
      })
    }
  }

  return output

}

