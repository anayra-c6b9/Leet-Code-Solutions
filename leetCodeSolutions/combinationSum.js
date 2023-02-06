// Given an array of distinct integers candidates
// and a target integer target, return a list of
// all unique combinations of candidates where
// the chosen numbers sum to target. You may
// return the combinations in any order.

// The same number may be chosen from candidates
// an unlimited number of times. Two combinations
// are unique if the frequency of at least one
// of the chosen numbers is different.

//The test cases are generated such that the
//number of unique combinations that sum up to
//target is less than 150 combinations for the
//given input.

var combinationSum = function(candidates, target) {
  if(target == 1) return []
  let result = []
  const n = candidates.length
  
  const _getCombination = (index, collection, sum) => {
    if(sum > target) return
    if(sum == target) result.push(collection.slice())

    for(var i = index; i < n; i++){
      collection.push(candidates[i])
      _getCombination(i,collection,sum+candidates[i])
      collection.pop()
    }
  }

  for(var i = 0; i < n; i++){
    //console.log(`Searching for all possible combinations of index: ${i}, element: ${candidates[i]}`)
    _getCombination(i,[candidates[i]],candidates[i])
  }

  return result
};

console.log(combinationSum([2,3,6,7], 7))

