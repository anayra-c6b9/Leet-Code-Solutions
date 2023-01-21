// Given a linked list, swap every two
// adjacent nodes and return its head.
// You must solve the problem without
// modifying the values in the list's
// nodes (i.e., only nodes themselves
// may be changed.)

const prompt = require('prompt-sync')()

var traverse = (ll) => {
  console.log(`\ntraversing`)
  while(ll){
    console.log(ll.val)
    ll = ll.next
  }
  console.log()
}

class LL{
  constructor(val = 0, next = null){
    this.val = val
    this.next = next
  }
}

var swapPairs = function(head) {
  if(!head || !head.next){
    console.log(`cannot iterate, backtracking`)
    return head
  }
  head.next.next = swapPairs(head.next.next)
  console.log(`swapping: ${head.val} -> ${head.next.val}`)
  let temp = head.next
  head.next = temp.next
  temp.next = head
  console.log(`after swap: ${temp.val} -> ${temp.next.val}`)
  return temp
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

traverse(temp)

temp = swapPairs(temp)

traverse(temp)




