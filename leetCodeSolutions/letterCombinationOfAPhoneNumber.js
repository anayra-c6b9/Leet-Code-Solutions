// Given a string containing digits from 2-9
// inclusive, return all possile letter
// combinations that the number could represent.
// Return the answer in any order

var letterCombinations = function(digits) {
  var collection = []
  var store = []
  var str = []
  var pattern
  var result
  var valTab = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
  }
  var strLen = digits.length
  var arrayLen = 1;
  digits = digits.split("")
  digits.forEach(x => {
    arrayLen *= valTab[x].length
    console.log("getting array Len")
  })
  var dv = 1  // to divide the array length
  var i, j, counterH
  for(i=0; i<strLen; i++){
    counterH = 0
    str = []
    pattern = valTab[digits[i]]
    while(j < arrayLen){
	    console.log('Starting the while loop')
      j = 0
      for(j; j<pattern.length; j++){
        result = Array(arrayLen/pattern.length)
	      .fill(pattern[j])
	counterH += arrayLen/pattern.length - 1
	str.push(...result)
	console.log('Ending the inner loop')
      }
    }
    store.push(str)
    console.log('Ending the outer loop')
  }
  var heehee // store the concatenated result
  for(i = 0; i<arrayLen; i++){
    heehee = ''
    for(j = 0; j<strLen; j++){
      heehee += str[i][j]
    }
    collection.push(heehee)
  }


  return collection
};

console.log(letterCombinations("23"))
