// Given the head of a linked list, reverse
// the nodes of the list k at a time, and
// return the modified list.
//
// k is a positive integer and is less than
// or equal to the length of the linked list.
// If the number of nodes is not a multiple
// of k then left-out nodes, in the end,
// should remain as it is.
//
// You may not alter the values in the list's
// nodes, only nodes themselves may be changed.

const prompt = require('prompt-sync')()

var traverse = (ll) => {
  console.log(`\ntraversing`)
  while(ll){
    console.log(`${ll.val} ->`)
    ll = ll.next
  }
  console.log()
}

const reachEnd = (node) => {
  if(!node.next) return node
  return reachEnd(node.next)
}

class LL{
  constructor(val = 0, next = null){
    this.val = val
    this.next = next
  }
}

var swapPairs = function(head) {
  if(!head.next){
    //console.log(`cannot iterate, backtracking`)
    return head
  }
  let temp = swapPairs(head.next)
  //console.log(`New swap initiated,,\nfrom temp we have`)
  traverse(temp)
  let point = reachEnd(temp)
  //console.log(`current head-> ${head.val} , temp-> ${temp.val}`)
  head.next = null
  point.next = head
  //console.log(`afterSwapping:`)
  traverse(temp)
  return temp
}

var reverseKGroup = function(head, k) {
  let point = head
  var i
  for(i = 0; i < k; i++){
    if(!point) break
    point = point.next
  }
  if(i != k) return head
  let it = head
  for(i = 0; i < k-1; i++){
    it = it.next
  }
  it.next = null
  head = swapPairs(head)
  it = head
  for(i = 0; i < k-1; i++){
    it = it.next
  }
  it.next = reverseKGroup(point,k)
  return head
}

let temp = null
let size = prompt("size of linked list: ")
console.log()
for(var i = 0; i < size; i++){
  console.log(`For i = ${i}`)
  var val = prompt('Enter val: ')
  var curr = new LL(val, temp)
  curr.next=temp
  temp=curr
}

let interval = prompt('Enter the interval: ')

traverse(temp)

temp = reverseKGroup(temp, interval)

traverse(temp)




