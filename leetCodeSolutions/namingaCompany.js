// You are given an array of strings ideas that
// represents a list of names to be used in the
// process of naming a company. The process of
// naming a company is as follows:

// Choose 2 distinct names from ideas, call
// them ideaA and ideaB.
// Swap the first letters of ideaA and ideaB
// with each other.
// If both of the new names are not found in
// the original ideas, then the name ideaA
// ideaB (the concatenation of ideaA and ideaB,
// separated by a space) is a valid company name.
// Otherwise, it is not a valid name.

// Return the number of distinct valid names
// for the company.

var distinctNames = function(ideas) {

  const _similar = (param1, param2) => {
    let match = 0
    hash[param1].forEach(x => {
      if(hash[param2].has(x))
	match++
      })
    return match
  }

  const n = ideas.length
  let result = 0

  let hash = new Array(26).fill().map(x => new Set())
  ideas.forEach(x => {
    hash[x[0].charCodeAt() - 97].add(x.slice(1))
  })
  let store = []
  hash.forEach((x,i) => {
    if(x.size)
      store.push(i)
  })

  for(var i = 0; i < store.length; i++){
    for(var j = i+1; j < store.length; j++){
      let same = _similar(store[i], store[j])
      result += 2*(hash[store[i]].size - same)*(hash[store[j]].size - same)
    }
  }

  return result
}

