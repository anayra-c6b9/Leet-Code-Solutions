// You are given a 0-indexed integer array nums.
// The effective value of three indices i, j, and k
// is defined as ((nums[i] | nums[j]) & nums[k]).
// The xor-beauty of the array is the XORing of the
// effective values of all the possible triplets
// of indices (i, j, k) where 0 <= i, j, k < n.
//
// Return the xor-beauty of nums.
//

// the answer is very simple
// its description is in https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015014/why-just-xor-of-all-numbers-works/

var xorBeauty = function(nums){
  /** not this
   * well this might seem logical but
   *
  // finding all possible indices
  // counting enum of each index in each column
  let count = 1
  // storing range of enumeration
  let rangeOfEnum = 1
  // storing the current index to print
  let curr = 0
  const col = 3
  const row = Math.pow(nums.length, col)
  // storing all indice combinations
  let store = new Array(row)
		  .fill()
		  .map(x => Array())
  
  // loop to get all possible indices
  for(var i = 0; i < col; i++){
    for(var j = 0; j < row; j++){
      store[j].push(curr)
      if(count == rangeOfEnum){
	curr = (++curr)%nums.length
	count = 1
      } else count++
    }
    rangeOfEnum *= nums.length
  }

  result = store.reduce((acc, now) => acc ^ ((nums[now[0]] | nums[now[1]]) & nums[now[2]]), 0)

  return result
  */

  // the real answer is
  return nums.reduce((acc, curr) => acc^curr, 0)

};

let a = xorBeauty([15,45,20,2,34,35,5,44,32,30])
console.log(a)

