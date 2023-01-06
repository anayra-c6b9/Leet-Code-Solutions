// Given the head of a linked list, remove
// the nth node from the end of the list
// and return its head.

var getCount = function(node, count){
  while(node.next != null){
    node = node.next
    count++
  }
  return count
}

var killNode = function(node, pos, kill){
  if(pos + 1 == kill){
    node.next = node.next.next
    return node
  } else if(pos == kill){
    node = node.next
    return node
  } else if(node.next !== null){
      killNode(node.next, pos + 1, kill)
  }
  return node
}

var removeNthFromEnd = function(head, n){
  var nodeLen = getCount(head, 1)
  return killNode(head, 0, nodeLen-n)
}
