// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

var checkInclusion = function(s1, s2) {

  const n = s1.length

  if(s2.length < n) return false

  const _hashCheck = () => {
    for(var i = 0; i < 26; i++){
      if(s1Hash[i] != s2Hash[i])
        return false
    }
    return true
  }

  let s1Hash = new Array(26).fill(0)
  let s2Hash = new Array(26).fill(0)

  for(var i = 0; i < n; i++)
    s1Hash[s1[i].charCodeAt(0)-97]++
  
  // initializing the first hash map for s2
  // substring
  for(var i = 0; i < n; i++)
    s2Hash[s2[i].charCodeAt(0)-97]++
  if(_hashCheck()) return true

  for(var i = n; i < s2.length; i++){
    s2Hash[s2[i-n].charCodeAt(0)-97]--
    s2Hash[s2[i].charCodeAt(0)-97]++
    if(_hashCheck()) return true
  }
  
  return false

}


