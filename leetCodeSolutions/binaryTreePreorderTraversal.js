// Given the root of a binary tree, return
// the preorder traversal of its nodes' values.

var preorderTraversal = function(root){
  if(!root.length) return []

  const _traverse = (node) => {
    output.push(node.val)
    if(node.left)
      _traverse(node.left)
    if(node.right)
      _traverse(node.right)
  }

  let output = []
  _traverse(root)
  return output
}



console.log(preorderTraversal())

