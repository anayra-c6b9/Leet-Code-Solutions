// Given an integer array nums, return all
// the different possible non-decreasing
// subsequences of the given array with at
// least two elements. You may return the
// answer in any order.

var findSubSequences = function(nums) {

  const _pushUp = (ans) => {
    if(!result.length){
      result.push(ans)
      console.log(`\npushing [${ans}] in result\nCurrent Result`)
      result.forEach(x => console.log(x))
      return
    }
    flag = 0
    for(var i = 0; i < result.length; i++){
      if(result[i].length == ans.length && result[i].every((x,ind) => x == ans[ind])){
	console.log(`not pushing [${ans}] in result\nBecause of [${result[i]}]`)
	flag = 1
      }
    }
    if(!flag){
      console.log(`pushing [${ans}] in result`)
      result.push(ans)
    }
    console.log(`Current Result`)
    result.forEach(x => console.log(x))
  }

  const _getCrumbs = (index, stack) => {
    stack.push(nums[index])
    console.log(`\n\nIndex: ${index}, current stack: [${stack}], stack length: ${stack.length}`)
    if(stack.length > 1){
      _pushUp(stack)
    }
    if(!child[index].length){
      console.log(`child for Index: ${index} is empty`)
      return
    }
    for(var i = 0; i < child[index].length; i++){
      console.log(`travering to child: ${child[index][i]}`)
      _getCrumbs(child[index][i], stack.slice(0))
    }
    
  }

  const n = nums.length
  let result = []

  let child = new Array(nums.length).fill().map(x => Array())
  for(var i = 0; i < n-1; i++){
    for(var j = i+1; j < n; j++){
      if(nums[i] <= nums[j])
        child[i].push(j)
    }
  }
  console.log(nums)  
  console.log(child)

  for(var i = 0; i < n-1; i++){
    console.log(`======GETTING SUB SEQUENCE FOR INDEX: ${i}, VALUE: ${nums[i]}`)
    _getCrumbs(i, [])
  }

  return result

}

console.log(findSubSequences([7,2]))

