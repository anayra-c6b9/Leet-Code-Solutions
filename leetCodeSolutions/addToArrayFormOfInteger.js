// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].

// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

var addToArrayForm = function(num, k) {

  num.reverse()
  const n = num.length

  let carry = 0
  let i
  let result = [] 

  for(i = 0; i < n && k>0; i++){
    result.push((num[i]+(k%10)+carry)%10)
    carry = parseInt((num[i]+(k%10)+carry)/10)
    k = parseInt(k/10)
  }

  while(i < n){
    result.push((num[i]+carry)%10)
    carry = parseInt((num[i]+carry)/10)
    i++
  }

  while(k>0){
    result.push(((k%10)+carry)%10)
    carry = parseInt(((k%10)+carry)/10)
    k = parseInt(k/10)
  }

  if(carry)
    result.push(carry)

  return result.reverse()
}

