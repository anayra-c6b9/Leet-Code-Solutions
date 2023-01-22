// Given a string s, partition s such that every
// substring of the partition is a palindrome.
// Return all possible palindrome partitioning of s.

var partition = function(s) {
  const n = s.length
  
  // check if a string is palindrome or not
  const _isPalindrome = str => {
    let flag = 0
    let size = str.length
    for(var i = 0; i <= (size-1)/2; i++){
      if(str[i] !== str[size-1-i]){
	flag = 1
	break
      }
    }
    return (flag) ? false : true
  }

  // get all palindromes from this index onwards
  const _getPalindrome = index => {
    store = ''
    for(var i = index; i < n; i++){
      store += s[i]
      if(_isPalindrome(store)){
	collection[index].push(store)
      }
    }
  }

  // get every possible permutation in collection
  const _permutate = (index, allPer) => {
    if(index >= collection.length){
      // console.log(`current per: [${allPer}]`)
      output.push(allPer.slice())
      return
    }

    for(var i = 0; i < collection[index].length; i++){
      allPer.push(collection[index][i])
      _permutate(index+collection[index][i].length, allPer)
      allPer.pop()
    }
  }

  let collection = new Array(n).fill().map(x => Array())
  let output = []

  for(var i = 0; i < n; i++)
    _getPalindrome(i)

  _permutate(0, [])

  return output
  
}

let a = partition("ghgkdjff")
a.forEach(x => console.log(x))

