// You are given a string s and an array of strings
// words. All the strings of words are of the same length.

// A concatenated substring in s is a substring
// that contains all the strings of any permutation
// of words concatenated.

// For example, if words = ["ab","cd","ef"], then
// "abcdef", "abefcd", "cdabef", "cdefab", "efabcd",
// and "efcdab" are all concatenated strings.
// "acdbef" is not a concatenated substring because
// it is not the concatenation of any permutation
// of words.

// Return the starting indices of all the concatenated
// substrings in s. You can return the answer in any order.

var findSubstring = function(s, words) {
  //words = [...new Set(words)]
  let totalLength = words.length*words[0].length
  let wordLength = words[0].length
  if(s.length < totalLength) return []
  let result = []

  for(var i = 0; i <= s.length-totalLength; i++){
    count = 0
    console.log(`\n\nFor Index: ${i}\nCount: ${count}`)
    let tempList = words.slice()
    for(var j = i; j < i+totalLength;){
      
      console.log(`From Index: ${j}`)
      let slice = s.substring(j,j+wordLength)
      console.log(`Current Slice is: ${slice}`)
      let flag = 0

      for(var ind = 0; ind < tempList.length; ind++) {
	if(tempList[ind] == slice){
	  console.log(`Slice: ${slice} == ${tempList[ind]}`)
	  tempList.splice(ind,1)
	  flag = 1
	  break
	}
      }

      if(!flag){
	console.log('No matches detected... Breaking')
	break
      } else {
        count++
      }
      j += wordLength
    }
    if(count == words.length){
      console.log(`===> Pushing ${i} in result`)
      result.push(i)
      //i += totalLength - wordLength
    }
  }

  return result
}

console.log(findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake",["fooo","barr","wing","ding","wing"]))


