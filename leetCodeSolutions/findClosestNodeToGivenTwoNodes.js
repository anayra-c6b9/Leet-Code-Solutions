// You are given a directed graph of n nodes
// numbered from 0 to n - 1, where each node
// has at most one outgoing edge.

// The graph is represented with a given
// 0-indexed array edges of size n, indicating
// that there is a directed edge from node i
// to node edges[i]. If there is no outgoing
// edge from i, then edges[i] == -1.

// You are also given two integers node1
// and node2.

// Return the index of the node that can be
// reached from both node1 and node2, such
// that the maximum between the distance from
// node1 to that node, and from node2 to that
// node is minimized. If there are multiple
// answers, return the node with the smallest
// index, and if no possible answer exists,
// return -1.
//

var closestMeetingNode = function(edges, node1, node2) {

  let n = edges.length
  let d1 = new Array(n).fill(-1)
  let d2 = new Array(n).fill(-1)
  let curr = n
  let result

  const _getDist = (arr, pos, move) => {
    if(arr[pos] != -1) return
    arr[pos] = move
    if(edges[pos] == -1) return
    _getDist(arr, edges[pos], move+1)
  }
  
  _getDist(d1, node1, 0)
  _getDist(d2, node2, 0)

  for(var i = 0; i < n; i++){
    if(d1[i] != -1 && d2[i] != -1){
      if(Math.max(d1[i], d2[i]) < curr){
	curr = Math.max(d1[i], d2[i])
	result = i
      }
    }
  }

  console.log(d1)
  console.log(d2)
  return (result) ? result : -1
}

console.log(closestMeetingNode([4,4,8,-1,9,8,4,4,1,1],5,6))

