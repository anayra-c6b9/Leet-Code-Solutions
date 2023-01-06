const prompt = require('prompt-sync')();

//var lenOfStr = [];

function check(str, i){
    var j = 0;
    //console.log(`\nCheck initiated\nj initialized to ${j}`);
    while(i+j < str.length){
    	//console.log(`while(${i+j} < ${str.length}) : ${(i+j)<str.length}`);
        //console.log(`if (${str.slice(i, i+j)} includes ${str[i+j]}) : ${str.slice(i,i+j).includes(str[i+j])}`);	
        if(str.slice(i,i+j).includes(str[i+j])){
	    //console.log(`initializing new check function where j ended with ${j}`);
            return Math.max(j, check(str, str.lastIndexOf(str[i+j], i+j-1)+1));
        } else {
            j++;
	    //console.log(`j incremented to ${j}`);
        }
    }
    //console.log(`j ended with ${j}`);
    //console.log(`returning only ${j}`);
    return j;
}

var lengthOfLongestSubstring = function(s) {
    var result = check(s, 0);
    //lenOfStr.sort((a,b)=>{return b-a})
    console.log(result);
}

let word = prompt("Enter the string: ");
lengthOfLongestSubstring(word);
//console.log(lenOfStr);

