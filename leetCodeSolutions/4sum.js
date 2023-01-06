// Given an array nums of n integers, return
// an array of all  the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]]
// such that
// 0 <= a,b,c,d < n
// a, b, c and d are distinct
// nums[a] + nums[b] + nums[c] + nums[d]
// == target

var fourSum = function(nums, target){
  nums.sort((a,b) => a-b)
  var len = nums.length
  var sum
  var solution = []
  for(var i = 0; i < len - 3; i++){
    if(i > 0 && nums[i] == nums[i-1])
      continue
    for(var j = i+1; j < len - 2; j++){
      if(j > i+1 && nums[j] == nums[j-1])
        continue
	left = j+1
	right = len-1
	while(left < right){
	  const total = nums[i]+nums[j]
                  +nums[left]+nums[right]
	  console.log(`total is : ${total}
		  elements are ${nums[i]}${nums[j]}
		  ${nums[left]}${nums[right]}`)
	  if(total == target){
	    solution.push([nums[i],
	  	          nums[j],
		          nums[left],
		          nums[right]])
            do{
	      left++
	    } while(nums[left] == nums[left-1])
	    do{
              right--
	    } while(nums[right] == nums[right+1])
	  } else if(total < target){
	    do{
	      left++
	    } while(nums[left] == nums[left-1])
  	    console.log('left initiated')
	  } else {
	    do{
	      right--
	    } while(nums[right] == nums[right + 1])
	    console.log('right initiated')
	  }
        }   
    }
  }
  return solution
}

console.log(fourSum([1,0,-1,0,-2,2], 0))

