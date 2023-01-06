const prompt = require('prompt-sync')();
class linkedList{
	constructor(val, next){
		this.val = (val === undefined?null:val);
		this.next = (next === undefined?null:next)
	}
}

function createList() {
	console.log("creating list");
	var next = null;
	var ans = '';
	while(true){
		var val = parseInt(prompt("Enter val: "));
		var ll = new linkedList(val, next);
		ans = parseInt(prompt("do you want to continue (0/1): "));
		if(ans == 0){
			break;
		}
		next = ll;
	}
	return ll;
}

function showList(ll){
	console.log("The link list you created is : ");
	while(ll.next != null){
		console.log(ll.val);
		ll = ll.next;
	}
	console.log(ll.val)
}

/* creating list 1 & 2 */
var ll1 = createList();
var ll2 = createList();

/* printing list 1 & 2 */
showList(ll1);
console.log();
showList(ll2);

/*
 *
 *
 *
 *
 * */

function addList(list){
    var i = BigInt(1);
    var sum = BigInt(0);
    while(list.next !== null){
        sum += BigInt(BigInt(list.val)*i);
        i *= BigInt(10);
        list = list.next;
    }
    sum += BigInt(BigInt(list.val)*i);
    console.log(`sum is : ${sum}`)
    return sum;
}

function add (a, b) {
    var result = ''
    var carry = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || carry) {
    carry += ~~a.pop() + ~~b.pop()
    result = carry % 10 + result
    carry = carry > 9
  }
  return result
}

var addTwoNumbers = function(l1, l2) {
    var sum1 = addList(l1).toString();
    var sum2 = addList(l2).toString();
    var finalSum = add(sum1, sum2);
    console.log(`The sum of both linked list is : ${finalSum}`);
    for(var i = 0; i<finalSum.length; i++){
	var newVal = parseInt(finalSum[i]);
	if(i === 0){
	    var nextList = null;
	} else {
	    var nextList = l3;
	}
	var l3 = {
	    val: newVal,
	    next: nextList
	}
    }
/*
    var copylen = len;
    var addit=0;
    while(copylen >= 0){
        var newVal = BigInt((finalSum/BigInt(Math.pow(10,copylen))));
	console.log(`newVal is: ${newVal}`);
        if(copylen == len){
            var nextList = null
        } else {
            var nextList = l3;
        }
        var l3 = {
		val: newVal,
		next: nextList
        }
        finalSum -= newVal*BigInt(Math.pow(10,copylen));
	console.log(`new Final sum is : ${finalSum}`);
        copylen--;
	console.log(`new copylen is : ${copylen}`);
    }
    return l3;*/
    return l3;
};

finalList = addTwoNumbers(ll1, ll2);
showList(finalList);
