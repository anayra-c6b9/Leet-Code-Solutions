// There is a tree (i.e., a connected, undirected
// graph with no cycles) structure country network
// consisting of n cities numbered from 0 to n - 1
// and exactly n - 1 roads. The capital city is
// city 0. You are given a 2D integer array roads
// where roads[i] = [ai, bi] denotes that there
// exists a bidirectional road connecting cities
// ai and bi.

// There is a meeting for the representatives of
// each city. The meeting is in the capital city.

// There is a car in each city. You are given an
// integer seats that indicates the number of
// seats in each car.

// A representative can use the car in their city
// to travel or change the car and ride with
// another representative. The cost of traveling
// between two cities is one liter of fuel.

// Return the minimum number of liters of fuel
// to reach the capital city.

var minimumFuelCost = function(roads, seats) {
  
  const n = roads.length
  let hash = new Array(n+1).fill().map(x => Array())
  let fuel = 0

  for(var i = 0; i < n; i++){
    hash[roads[i][0]].push(roads[i][1])
    hash[roads[i][1]].push(roads[i][0])
  }

  console.log(hash)

  const _traverse = (curr, prev) => {
    // traverse all connected roads
    // except previous road
    var representative = (curr) ? 1 : 0
    for(var i = 0; i < hash[curr].length; i++){
      if(hash[curr][i] == prev) continue
      representative += _traverse(hash[curr][i], curr)
    }
    
    if(curr)
      fuel += Math.ceil(representative/seats)
    
    return representative
  }

  _traverse(0,-1)

  return fuel
};

