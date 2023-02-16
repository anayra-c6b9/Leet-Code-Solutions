// Given the root of a binary tree, return
// its maximum depth.
// A binary tree's maximum depth is the
// number of nodes along the longest path
// from the root node down to the farthest
// leaf node.

var maxDepth = function(root) {

  let max_depth = 0

  const _dive = (node, depth) => {
    if(depth > max_depth){
      max_depth = depth
    }  
    if(node.left) _dive(node.left, depth+1)
    if(node.right) _dive(node.right, depth+1)
  }

  if(root) _dive(root, 1)

  return max_depth

}

console.log(maxDepth())

