const prompt = require('prompt-sync')();

var longestPalindrome = function(s){
	let ds = s.replaceAll("", "|");
	let palindromeRadii = Array(ds.length).fill(0);
	let center = 0;
	let radius = 0;
	let oldRadius;
	let oldCenter;
	let mirroredCenter;
	let mirroredRadius;
	let maxMirroredRadius;
	while(center < ds.length){
		while(center-(radius+1) >= 0 && center+(radius+1) < ds.length && ds[center-(radius+1)] == ds[center+(radius+1)]){
			radius++;
		}
		palindromeRadii[center] = radius;
		oldCenter = center;
		oldRadius = radius;
		center++;
		radius = 0;
		while(center <= oldCenter+oldCenter){
			mirroredCenter = oldCenter - (center - oldCenter);
			maxMirroredRadius = oldCenter + oldRadius - center;
			if(palindromeRadii[mirroredCenter] < maxMirroredRadius){
				palindromeRadii[center] = palindromeRadii[mirroredCenter];
				center++;
			} else if(palindromeRadii[mirroredCenter] > maxMirroredRadius){
				palindromeRadii[center] = maxMirroredRadius;
				center++
			} else {
				radius = maxMirroredRadius;
				break;
			}
		}
	}
	let longestPalindrome = Math.max.apply(Array, palindromeRadii);
	let finalCenter = parseInt((palindromeRadii.indexOf(longestPalindrome)-1)/2);
	let start = finalCenter - parseInt((longestPalindrome-1)/2);
	let end = finalCenter + parseInt(longestPalindrome/2);
	console.log(s.slice(start,end+1));
	return s.slice(start,end+1);
}

let s = prompt('Enter the string: ');
let str = longestPalindrome(s);
console.log(`the longest palindrome substring is : ${str}`);
