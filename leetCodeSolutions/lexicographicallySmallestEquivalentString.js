// You are given two strings of the same
// length s1 and s2 and a string baseStr.

// We say s1[i] and s2[i] are equivalent
// characters.

// For example, if s1 = "abc" and
// s2 = "cde", then we have 'a' == 'c',
// 'b' == 'd', and 'c' == 'e'.

// Equivalent characters follow the
// usual rules of any equivalence relation:

// Reflexivity: 'a' == 'a'.
// Symmetry: 'a' == 'b' implies 'b' == 'a'.
// Transitivity: 'a' == 'b' and 'b' == 'c'
//               implies 'a' == 'c'.

// For example, given the equivalency
// information from s1 = "abc" and s2 = "cde",
// "acd" and "aab" are equivalent strings of
// baseStr = "eed", and "aab" is the
// lexicographically smallest equivalent
// string of baseStr.

// Return the lexicographically smallest
// equivalent string of baseStr by using
// the equivalency information from s1 and s2.

var smallestEquivalentString = function(s1, s2, baseStr) {

  let alphabet = new Map()
  let result = ''

  const _pushInAlphabet = (val1, val2) => {

    if(val1 ==  val2) return

    if(!alphabet.has(val1) && !alphabet.has(val2)){

      alphabet.set(val2, val1)

    } else if(alphabet.has(val2) && !alphabet.has(val1)){

      if(alphabet.get(val2) < val1){
        alphabet.set(val1, alphabet.get(val2))
      } else {
        _pushInAlphabet(val1, alphabet.get(val2))
      }

    } else if(alphabet.get(val1) && !alphabet.get(val2)){

      alphabet.set(val2, alphabet.get(val1))

    } else {

      par1 = alphabet.get(val1)
      par2 = alphabet.get(val2)

      if(par1 < par2){
        _pushInAlphabet(par1, par2)
      } else {
        _pushInAlphabet(par2,par1)
      }

    }
  }

  const _getResult = (val) => {

    let curr = alphabet.get(val)

    if(alphabet.has(curr)){
      _getResult(curr)
    } else result += curr

  }

  for(var i = 0; i < s1.length; i++){

    if(s1[i] !== s2[i]){

      if(s1[i] < s2[i]){
	_pushInAlphabet(s1[i], s2[i])
      }
      else {
	_pushInAlphabet(s2[i], s1[i])
      }

    }
  }

  for(var i = 0; i < baseStr.length; i++){

    if(alphabet.has(baseStr[i])){
      _getResult(baseStr[i])
    } else result += baseStr[i]

  }

  return result

}

