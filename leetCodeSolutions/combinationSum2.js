// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

var combinationSum = function(candidates, target) {
  let result = []
  const n = candidates.length
  candidates.sort((a,b)=>a-b)
  
  const _getCombination = (index, collection, sum) => {
    if(sum > target) return
    if(sum == target)
      result.push(...[collection.slice()])

    for(var i = index; i < n; i++){
      if(i!=index && candidates[i]==candidates[i-1]) continue
      collection.push(candidates[i])
      _getCombination(i+1,collection,sum+candidates[i])
      collection.pop()
    }
  }

  for(var i = 0; i < n; i++){
    if(candidates[i] == candidates[i-1]) continue
    //console.log(`Searching for all possible combinations of index: ${i}, element: ${candidates[i]}`)
    _getCombination(i+1,[candidates[i]],candidates[i])
  }

  return result
};

console.log(combinationSum([10,1,2,7,6,1,5], 8))

