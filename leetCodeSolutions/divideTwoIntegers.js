// Given two integers dividend and divisor,
// divide two integers without using
// multiplication, division and mod operator.
//
// The integer division should truncate
// towards zero, which means losing its
// fractional part. For example; 8.345
// would be truncated to 8, and -2.7335
// would be truncated to -2
//

var getCount = function (dividend, divisor){
  var count = 0
  var shift = 0
  var newDivisor = divisor
  while(dividend >= newDivisor){
    //console.log(`dividend is ${dividend}
     //and new divisor is ${newDivisor}`)
    //console.log(`old count ${count}`)
    dividend -= newDivisor
    if(shift == 0) shift = 1
    else shift = shift << 1
    count += shift
    //console.log(`new count ${count}`)
    newDivisor = newDivisor << 1
  }
  if(dividend < divisor){
    //console.log(`returning count: ${count}`)
    return count
  }
  else
    return count + getCount(dividend, divisor)
}

var divide = function(dividend, divisor){
  var flag = 1
  if(dividend < 0){
    flag *= -1
    dividend *= -1
  }
  if(divisor < 0){
    flag *= -1
    divisor *= -1
  }
  var quotient = getCount(dividend, divisor)
  if(flag == -1) quotient *= -1
  if(quotient <= -2147483648)
    return -2147483648
  if(quotient >= 2147483647)
    return 2147483647
  return quotient
}

console.log(divide(2147483647, 3))

