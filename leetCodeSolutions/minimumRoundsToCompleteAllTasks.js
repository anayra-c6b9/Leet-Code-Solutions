// You are given a 0-indexed integer array tasks,
// where tasks[i] represents the difficulty level
// of a task. In each round, you can complete
// either 2 or 3 tasks of the same difficulty.
//
// Return the minimum rounds required to complete
// all the tasks, or -1 if it is not possible to 
// complete all the tasks.

/*
var minimumRounds = function(tasks){
  tasks.sort((a,b) => a-b)
  var result = 0
  var count = 1
  var iter = 1
  while(tasks.length !== 0){
    while(tasks[iter] === tasks[0]){
      count++
      iter++
    }
    if(count%3 == 0){
      tasks.splice(0, 3)
    } else if(count >= 2){
      tasks.splice(0, 2)
    } else {
      return -1
    }
    result++
    iter = 1
    count = 1
  }
  return result
}
*/

var minimumRounds = function(tasks){
  var map = new Map()
  var updated
  var count = 0
  // creting a key value pair for tasks
  for(var i = 0; i < tasks.length; i++){
    if(map.has(tasks[i])){
      updated = map.get(tasks[i])
      map.set(tasks[i], ++updated)
    } else {
      map.set(tasks[i], 1)
    }
  }
  console.log(map)
  console.log()
  // setting iterator for map
  var iter = map.values()
  // holds map values
  var hold = iter.next().value
  while(hold){
    if(hold == 1)
      return -1
    if(hold%3 == 0){
      count += hold/3
    } else {
      count += parseInt(hold/3) + 1
    }
    hold = iter.next().value
  }
 return count
}


console.log(minimumRounds([2,2,3,3,2,4,4,4,4,4]))

