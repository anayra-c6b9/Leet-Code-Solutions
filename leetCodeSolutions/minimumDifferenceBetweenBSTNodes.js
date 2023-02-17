// Given the root of a Binary Search Tree (BST),
// return the minimum difference between the
// values of any two different nodes in the tree.

var minDiffInBST = function(root) {

  let result = 1e06
  let arr = []

  const _search = (node) => {
    arr.push(node.val)

    if(node.left)
      _search(node.left)

    if(node.right)
      _search(node.right)
  }

  _search(root)

  arr.sort((a,b) => a-b)

  for(var i = 1; i<arr.length; i++){
    result = Math.min(result, arr[i]-arr[i-1])
  }

  return result
};
