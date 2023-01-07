// There are n gas stations along a circular route,
// where the amount of gas at the ith station is gas[i]
//
// You have a car with an unlimited gas tank and it
// costs cost[i] of gas to travel from the ith station
// to its next (i+1)th station. You begin the journey
// with an empty tank at one of the gas stations.
//
// Given two integer arrays gas and cost, return the
// starting gas stations's index if you can travel
// around the circuit once in the clockwise direction.
// Otherwise, return -1. If there exists a solution,
// it is guaranteed to be unique.
//


// optimized code

var arrayReduction = (arr) => {
  return arr.reduce((accumulator, current) => 
         accumulator + current, 0)
}

var canCompleteCircuit = function(gas, cost){

  // if total gas < total cost return -1
  // as the car will never cover the circuit
  if(arrayReduction(gas) < arrayReduction(cost))
    return -1
  
  let fuel = 0
  let returnIndex = 0

  for(var i = 0; i < gas.length; i++){
    fuel += gas[i] - cost[i]
    if(fuel < 0){
      fuel = 0
      returnIndex = i + 1
    }
  }

  return returnIndex
}

// slow code
/*
var canCompleteCircuit = function(gas, cost){

  len = gas.length

  var _checkCircuit = (index) => {
    var counter = index
    console.log(`starting from station: ${index}`)
    var fuel = 0
    while(true){
      fuel += gas[counter] - cost[counter]
      if(fuel >= 0){
        counter = (counter+1)%len
	console.log(`reaches station: ${counter}`)
	if(counter == index){
	  console.log(`completed circuit at ${index} == ${counter}`)
	  return true
	}
      } else break
    }
    return false

  }

  for(var i = 0; i < len; i++){
    if(gas[i] >= cost[i]){
      var result = _checkCircuit(i)
      if(result) return i
    }
  }
  
  return -1

}
*/
console.log(canCompleteCircuit([1,2,3,4,5], [5,4,3,2,1]))

