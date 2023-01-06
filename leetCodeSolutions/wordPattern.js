// Given a pattern and a string s, find if
// s follows the same pattern
//
// eg: pattern = 'abba'
//     s = 'dog cat cat dog'
//

class Pair{
  constructor(){
    this.collection = {}
  }
  add(key, value){
    if(Object.keys(this.collection).find(keyt => this.collection[keyt] === value))
      return false
    this.collection[key] = value
    return true
  }
}

var wordPattern = function(pattern, s){
  var pair = new Pair()
  var newS = s.split(" ")  // creating new array from s
  if(pair.length !== newS.length)
  var ans // to store the returned value while adding key value
  for(var i = 0; i < pattern.length; i++){
    if(pair.collection[pattern[i]] == null){
      ans = pair.add(pattern[i], newS[i])
      if(!ans) return false
    } else {
      if(pair.collection[pattern[i]] !== newS[i])
	return false
    }
  }
  return true
};


console.log(wordPattern('abba', "dog cat cat dog"))
