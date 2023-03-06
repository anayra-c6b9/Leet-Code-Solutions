// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Return the kth positive integer that is missing from this array.

var findKthPositive = function(arr, k) {
  res = 1
  for(var i=1, j=0; i<=k;){
    if(res !== arr[j]){
      i++
      res++
    } else {
      res = arr[j]+1
      j++
    }
  }
  return --res
}

