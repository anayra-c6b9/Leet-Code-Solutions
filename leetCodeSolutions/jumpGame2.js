// You are given a 0-indexed array of integers nums of
// length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length
// of a forward jump from index i. In other words, if
// you are at nums[i], you can jump to any nums[i + j]
// where:
//     0 <= j <= nums[i] and
//     i + j < n

// Return the minimum number of jumps to reach
// nums[n - 1]. The test cases are generated such
// that you can reach nums[n - 1].

var jump = function(nums){
  const n = nums.length
  if(n==1) return 0
  let result

  const letsJump = (curr, jumps) => {
    
    let maxIndex = 0
    let nextIndex
    for(var i = 1; i <= nums[curr]; i++){
      if(curr+i == n-1){
	result = jumps+1
	return
      }
      if(curr+i+nums[curr+i]>maxIndex){
        maxIndex = curr+i+nums[curr+i]
	nextIndex = curr+i
      }
    }
    letsJump(nextIndex, jumps + 1)
  }
  
  letsJump(0,0)
  return result
}

