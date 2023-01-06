// At the store, there are n ice cream bars.
// You are given an array costs of length n,
// where costs[i] is the price of the ith ice
// cream bar in coins. The boy initially has
// 'coins' coins to spend, and he wants to
// buy as many ice cream bars as possible. 

// Return the maximum number of ice cream bars
// the boy can buy with coins coins.


var maxIceCream = function(costs, coins){
  costs.sort((a,b) => a-b)
  let count = 0
  for(var i = 0; i < costs.length; i++){
    if(coins < costs[i]){
      return count
    } else {
      count++
      coins -= costs[i]
    }
  }
  return count
}


