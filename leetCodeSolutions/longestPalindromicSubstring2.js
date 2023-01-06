const prompt = require('prompt-sync')();

var checkPalindrome = function(s,left,right){
    while(left>=0 && right<s.length && s[left] == s[right]){
        left--;
        right++;
    }
    return right - left - 1;
}

var longestPalindrome = function(s){
    if(s == null || s.length == 0)
        return '';
    let i = 0;
    let left = 0;
    let right = 0;
    while(i<s.length){
        var oddPalindrome = checkPalindrome(s,i,i);
        var evenPalindrome = checkPalindrome(s,i,i+1);
        var currentPalindrome = Math.max(oddPalindrome, evenPalindrome);
        if(currentPalindrome > right - left + 1){
            left = i - parseInt((currentPalindrome-1)/2);
            right = i + parseInt(currentPalindrome/2);
        }
        i++;
    }
    return s.slice(left, right+1);
}

let s = prompt('Enter a string: ');
console.log(longestPalindrome(s));
