// There are some spherical balloons taped onto
// a flat wall that represents the X-Y plane.
// The balloons are represented as a 2D integer
// array points where points[i] = [x_strt, x_end]
// denotes a balloon whose horizontal diameter
// stretches between x_strt and x_end. You do not
// know the exact y-coordinate of the balloons.
//
// Arrows can be shot up directly in the positive
// y-direction from different points along the
// x-axis. A balloon with x_strt and x_end is
// burst by an arrow shot at x if
// x_strt <= x <= x_end. There is no limit to the
// number of arrows that can be shot. A shot
// arrow keeps travelling up infinitely, bursting
// any balloons in its path.
// 
// Given the array points, return the minimum
// number of arrows that must be shot to burst
// all ballons.

var merge = function(left, right){
  var arr = []
  while(left.length && right.length){
    if(left[0][0] < right[0][0]){
      arr.push(left.shift())
    } else if(right[0][0] < left[0][0]){
      arr.push(right.shift())
    } else {
      if(left[0][1] < right[0][1]){
        arr.push(left.shift())
      } else {
	arr.push(right.shift())
      }
    }
  }
  /*
  while(left.length){
    arr.push(...left)
  }
  while(right.length){
    arr.push(...right)
  }
  return arr
  */
  return [...arr, ...left, ...right]
}

// applying merge sort
var mergeSort = function(array){
  if(array.length < 2) return array
  var mid = array.length/2
  let left = array.splice(0, mid)
  return merge(mergeSort(left),mergeSort(array))
}

var findMinArrowShots = function(points){
  if(points.length == 1) return 1
  points =  mergeSort(points)
  var key = 0
  var count = key + 1
  var bound
  var arrows = 0
  while(key < points.length){
    bound = points[key][1]
    console.log(`for key: ${points[key]}`)
    while(count < points.length
       && points[count][0] <= bound){
      console.log(`bound: ${bound}
      element: ${points[count]} is under bound`)
      bound = Math.min(bound, points[count][1])
      count++
    }
    arrows++
    key = count
    count++
    console.log()
  }
  console.log(points)
  return arrows
};

console.log(findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]))




