// Given two strings needle and haystack,
// return the index of the first occurrence
// of needle in haystack, or -1 if needle
// is not part of haystack.

var strStr = function(haystack, needle) {
    var result = haystack.match(needle)
    if(result) return result.index
    return -1
};

// The below code is more optimized
// solution but is boring
/*
var strStr = function(haystack, needle) {
  for(var i = 0; i < haystack.length; i++){
    if(haystack[i] == needle[0]){
      for(var j = 1; j < needle.length; j++){
        if(haystack[i+j] !== needle[j]){
	  break
	}
      }
      if(j == needle.length) return i
    }
  }
  return -1
}
*/

// The built-in match function is not faster then
// the later algorithm because in addition to 
// finding the index of the substring it also
// returns substring, input and group

