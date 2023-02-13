// Given two non-negative integers low and high.
// Return the count of odd numbers between low
// and high (inclusive).

let count = 0

var countOdds = function(low, high) {
  return Math.floor((high+-low+1+(low%2))/2)
}

