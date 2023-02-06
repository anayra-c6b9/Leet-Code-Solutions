// Given two strings s and p, return an array
// of all the start indices of p's anagrams
// in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by
// rearranging the letters of a different
// word or phrase, typically using all the
// original letters exactly once.

var findAnagrams = function(s,p){
  const n = s.length
  const m = p.length
  let result = []

  if(n < m) return result

  const _checkMatch = (param1, param2) => {
    for(var i = 0; i < 26; i++){
      if(param1[i] != param2[i]){
	return false
      }
    }
    return true
  }
  
  let shash = new Array(26).fill(0)
  let phash = new Array(26).fill(0)
  // storing p in hash
  for(var i = 0; i < m; i++){
    phash[p[i].charCodeAt(0)-97]++
  }
  // storing s in hash
  for(var j = 0; j < m; j++){
    shash[s[j].charCodeAt(0)-97]++
  }
  // checking for match
  if(_checkMatch(shash, phash))
    result.push(0)

  for(var j = m; j < n; j++){
    shash[s[j].charCodeAt(0)-97]++
    shash[s[j-m].charCodeAt(0)-97]--
    if(_checkMatch(shash, phash))
      result.push(j-m+1)
  }
  
  return result

}

console.log(findAnagrams("abab", "ab"))

