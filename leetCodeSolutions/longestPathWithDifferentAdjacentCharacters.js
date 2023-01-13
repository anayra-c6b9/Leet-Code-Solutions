// You are given a tree (i.e. a connected,
// undirected graph that has no cycles)
// rooted at node 0 consisting of n nodes
// numbered from 0 to n - 1. The tree is
// represented by a 0-indexed array parent
// of size n, where parent[i] is the
// parent of node i. Since node 0 is the
// root, parent[0] == -1.

// You are also given a string s of length
// n, where s[i] is the character assigned
// to node i.

// Return the length of the longest path
// in the tree such that no pair of
// adjacent nodes on the path have the
// same character assigned to them.

var longestPath = function(parent, s) {
 
  const n = parent.length
  if(n == 1) return 1

  let kids = new Array(n).fill().map(x => Array())

  for(var i = 1; i < n; i++){
    kids[parent[i]].push(i)
  }

  const _getPath = (index) => {
    //length of
    let lc1 = 0	  //first longest child
    let lc2 = 0   //second longest child
    let newChild = 0 //new child length
    
    //iterate through all child aka. kids
    for(var i = 0; i < kids[index].length; i++){
      newChild = _getPath(kids[index][i])
      if(s[index] == s[kids[index][i]]){
	continue
      }
      //if new child's length is greater
      //than the first longest child
      //replace lc1 with newChild
      //then lc1 becomes lc2
	    // else 
      //if new child's lenght is greater
      //than the second longest child
      //replace lc2 with newChild
      if(newChild > lc1){
	lc2 = lc1
	lc1 = newChild
      } else if(newChild > lc2){
        lc2 = newChild
      }
    }
	
    longest = Math.max(longest, lc1+lc2+1)
    return lc1+1
  }

  let longest = 0

  _getPath(0)

  return longest

}

