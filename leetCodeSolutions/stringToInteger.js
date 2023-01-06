var myAtoi = function(s){
	s = s.replaceAll(/[a-zA-Z ]/g, '');
	let carrier = '';
	for(var i = 0; i< s.length; i++){
		if((s[i] === '-' || s[i] === '+') && (s[i+1] !== '+' || s[i+1] !== '-')){
			carrier += s[i];
		} else if(s[i] == '-' || s[i] == '+') {
		} else {
			carrier += s[i];
		}
	}
	console.log(parseInt(carrier));
}

myAtoi("words and 987");
