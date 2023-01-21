// Given n pairs of parentheses, write a
// function to generate all combinations
// of well-formed parentheses

var generateParanthesis = function(n) {
  
  let collection = []
  
  const _getStack = (left, right, stack) => {
    
    if(left == n && right == left){
      collection.push(stack)
    }
    
    if(left < n){
      _getStack(left+1, right, stack+'(')
    }
    if(right < left){
      _getStack(left, right+1, stack+')')
    }
  }

  _getStack(0,0,'')

  return collection
  
}

console.log(generateParanthesis(8))

