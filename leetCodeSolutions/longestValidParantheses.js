// Given a string containing just the characters
// '(' and ')', return the length of the longest
// valid (well-formed) parentheses substring

var longestValidParentheses = function(s) {
  let stack = []
  let count = 0
  let temp = 0
  for(var i = 0; i < s.length; i++){
    if(s[i] == ')' && stack[stack.length-1] == '('){
      count+=2
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }

  return count
}

console.log(longestValidParentheses(')()))))()()((()()()()())))()()((()(())(('))

