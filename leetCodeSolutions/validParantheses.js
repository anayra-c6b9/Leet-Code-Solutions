// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']'. Determine if
// the input string is valid.
// An input string is valid if:
// 	open brackets must be closed by its kind
// 	brackets must be closed in correct order
//

var isValid = function(s){
  var container = ''
  var count = 0
  while(count < s.length){
    container += s[count]
    while(true){
      if(container.slice(-2) == '[]' ||
         container.slice(-2) == '()' ||
         container.slice(-2) == '{}')
        container = container.slice(0,
	          container.length-2)
      else break
    }
    count++
  }
  if(container.length == 0) return true
  return false
}

console.log(isValid('([]{){}'))

