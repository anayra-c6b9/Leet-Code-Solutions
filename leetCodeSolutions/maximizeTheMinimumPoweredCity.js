// You are given a 0-indexed integer array
// stations of length n, where stations[i]
// represents the number of power stations
// in the ith city.

// Each power station can provide power to
// every city in a fixed range. In other
// words, if the range is denoted by r,
// then a power station at city i can
// provide power to all cities j such that
// |i - j| <= r and 0 <= i, j <= n - 1.

// Note that |x| denotes absolute value.
// For example, |7 - 5| = 2 and |3 - 10| = 7.

// The power of a city is the total number
// of power stations it is being provided
// power from.

// The government has sanctioned building
// k more power stations, each of which
// can be built in any city, and have the
// same range as the pre-existing ones.

// Given the two integers r and k, return
// the maximum possible minimum power of
// a city, if the additional power
// stations are built optimally.

// Note that you can build the k power
// stations in multiple cities.

var maxPower = function(stations, r, k) {

  let power = []
  const len = stations.length
  // calculating initial power recieved
  // by all cities

  // getting prefix sum for all cities
  let prefixSum = new Array(len+1).fill(0)
  for(var i = 1; i <= len; i++){
    prefixSum[i] = prefixSum[i-1]+stations[i-1]
  }
  
  // calculating the power
  for(var i = 1; i <= len; i++){
    let lbound = Math.max(1,i-r)
    let rbound = Math.min(i+r, len)
    power.push(prefixSum[rbound]-prefixSum[lbound-1])
  }
  
  // time for binary search

  let left = 0
  let right = 1e18
  // ans to keep the new answer
  // the latest answer will be the
  // right one
  let mid, ans
  while(left <= right){
    // diff to calculate the difference
    // between the mid and the power
    // of current city and add to keep
    // the additional power of each element
    // whenever a station is established
    let diff, add = 0
    // array rem to mark the range from
    // when the new station power wont reach
    let rem = new Array(len).fill(0)

    mid = Math.floor((left+right)/2)
    // count to store the value of max
    // stations we can established
    let count = k
	
    for(var i = 0; i < len; i++){
      // add will keep track how much power
      // additional power each city is getting
      add -= rem[i]
      let temp = power[i] + add
      
      // if temp < mid new station(s)
      // need to be added
      if(temp < mid){
	diff = mid - temp
	add += diff
	// setting the point from which
	// the additional power wont add
	rem[i+2*r + 1] = diff
	// updating count
	count -= diff
      }
      if(count < 0) break
    }
    if(count >= 0){
      ans = mid
      left = mid+1
    } else {
      right = mid-1
    }
  }

  return ans

}

