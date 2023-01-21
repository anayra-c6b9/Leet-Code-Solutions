// A valid IP address consists of exactly four integers
// separated by single dots. Each integer is between 0
// and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid
// IP addresses, but "0.011.255.245", "192.168.1.312"
// and "192.168@1.1" are invalid IP addresses.

// Given a string s containing only digits, return all
// possible valid IP addresses that can be formed by
// inserting dots into s. You are not allowed to reorder
// or remove any digits in s. You may return the valid
// IP addresses in any order.

var restoreIpAddresses = function(s) {

  const n = s.length
  if(n < 4 || n > 12) return []

  const _isValid = (arr) => {
    let n = arr.length
    if(n <= 4 && arr.every(x => {if(parseInt(x) <= 255
                                    && !(x.length > 1 && x[0] == '0'))
				    {
				      return true
				    } else return false
    })){
      return true
    }
    return false
  }

  const _backTrack = (index, temp) => {
/*
    if(index == n-1){
      _validateIp(temp)
    }*/

    if(!_isValid(temp)){return}

    if(index == n-1){
      console.log(`\n\nIndex: ${index}\nCurrent Temp:`)
      temp.forEach(x => console.log(x))
      if(temp.length == 4) result.push(temp.join('.'))
      return
    }
    console.log(`\n\nIndex: ${index}\nCurrent Temp:`)
    temp.forEach(x => console.log(x))

    // pushing the new digit to become new segment
    temp.push(s[index+1])
    _backTrack(index+1, temp)
    temp.pop()
    
    // merging the new digit to the end
    temp[temp.length-1] += s[index+1]
    _backTrack(index + 1, temp)
    temp[temp.length-1] = temp[temp.length-1].slice(0,-1)
    
  }

  let result = []
  _backTrack(0, [s[0]])

  return result

}

console.log(restoreIpAddresses("590327"))


