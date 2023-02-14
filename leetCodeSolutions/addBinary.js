// Given two binary strings a and b, return
// their sum as a binary string.

var addBinary = function(a,b) {

  getResult = {
    '00' : '0',
    '01' : '1',
    '10' : '1',
    '11' : '0',
  }
  getCarry = {
    '00' : '0',
    '01' : '0',
    '10' : '0',
    '11' : '1'
  }

  let carry = 0
  let result = ""
  let n, nextCarry

  a = a.split("").reverse()
  b = b.split("").reverse()

  n = (a.length < b.length) ? a.length : b.length

  for(var i = 0; i < n; i++){
    result = getResult[getResult[a[i]+b[i]]+carry] + result
    nextCarry = getCarry[a[i]+b[i]]
    carry = (nextCarry == '1') ? nextCarry : getCarry[getResult[a[i]+b[i]]+carry]
  }

  if(a[n]){
    for(var i = n; i < a.length; i++){
      result = getResult[a[i]+carry] + result
      carry = getCarry[a[i]+carry]
    }
  }
  if(b[n]){
    for(var i = n; i < b.length; i++){
      result = getResult[b[i]+carry] + result
      carry = getCarry[b[i]+carry]
    }
  }
  if(carry == '1') result = carry + result
  return result

};

