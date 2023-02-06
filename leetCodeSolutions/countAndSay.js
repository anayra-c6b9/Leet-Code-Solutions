// The count-and-say sequence is a sequence
// of digit strings defined by the recursive
// formula:
//    countAndSay(1) = "1"
//    countAndSay(n) is the way you would
//    "say" the digit string from
//    countAndSay(n-1), which is then
//    converted into a different digit string.

// To determine how you "say" a digit string,
// split it into the minimal number of
// substrings such that each substring
// contains exactly one unique digit. Then
// for each substring, say the number of
// digits, then say the digit. Finally,
// concatenate every said digit.

/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function(n) {
  if(n==1){
    console.log("\nReturning 1 for current input")
    return "1"
  }
  let temp = countAndSay(n-1)
  console.log(`\nFor input @ ${n}:`)
  let curr = temp[0]
  let res = ''
  let count = 0
  for(var i = 0; i < temp.length; i++){
    if(curr != temp[i]){
      console.log(`We have ${count} ${curr}`)
      res += count.toString() + curr
      curr = temp[i]
      count = 0
    }
    count++
  }
  console.log(`We have ${count} ${curr}`)
  res += count.toString()+curr
  console.log(`the result for input @ ${n}: ${res}`)
  return res
};

console.log(countAndSay(30))
