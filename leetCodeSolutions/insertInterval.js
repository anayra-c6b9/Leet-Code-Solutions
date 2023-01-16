// You are given an array of non-overlapping intervals
// intervals where intervals[i] = [starti, endi]
// represent the start and the end of the ith interval
// and intervals is sorted in ascending order by starti.
// You are also given an interval
// newInterval = [start, end] that represents the start
// and end of another interval.
//
// Insert newInterval into intervals such that intervals
// is still sorted in ascending order by starti and
// intervals still does not have any overlapping
// intervals (merge overlapping intervals if necessary).
//
// Return intervals after the insertion.

var insert = function(intervals, newInterval) {

  let allInterval = []
  let n = intervals.length
  let i = 0
  let flag = false

  while(i < n){
    if(intervals[i][1] < newInterval[0]){
      allInterval.push(intervals[i])
      i++
    } else if(newInterval[1] < intervals[i][0]){
      flag = true
      allInterval.push(newInterval)
      break
    } else {
      flag = true
      var l = Math.min(intervals[i][0], newInterval[0])
      var r = Math.max(intervals[i][1], newInterval[1])
      i++
      while(i < n){
        if(r < intervals[i][0]){
	  break
	} else if(r >= intervals[i][0]
		  && r < intervals[i][1]){
	  r = intervals[i][1]
	}
	i++
      }
      allInterval.push([l,r])
      break
    }

  }

  if(!flag) allInterval.push(newInterval)

  while(i < n){
    allInterval.push(intervals[i])
    i++
  }

  return allInterval

}

console.log(insert([], [4,8]))


