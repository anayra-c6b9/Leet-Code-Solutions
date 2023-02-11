// Given n non-negative integers representing
// an elevation map where the width of each
// bar is 1, compute how much water it can
// trap after raining.

var trap = function(height) {
  const n = height.length
  height.push(0)
  let total_water = 0
  let lmax = 0
  let rmax = 0

  const _getMax = (ind) => {
    let max = n
    for(var i = ind+1; i < n; i++){
      if(height[i] >= height[max]){
	max = i
      }
    }
    return max
  }

  for(var i = 0; i < n-1; i++){
    if(i == rmax){
      lmax = rmax
      rmax = _getMax(i)
      continue
    }
    if(height[lmax] < height[i]){
      lmax = i
      continue
    }
    total_water += Math.min(height[lmax], height[rmax]) - height[i]
  }

  return total_water
}

