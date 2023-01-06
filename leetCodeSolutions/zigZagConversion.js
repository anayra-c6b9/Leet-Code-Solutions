var convert = function(s, numRows) {
	if(numRows == 1){ return s;};
    	var index = 0;
	var newS = '';
	var direction;
	var count;
	while(index < numRows && index < s.length){
		direction = 'down';
		if((index%numRows) !=0 && (index%numRows) !=(numRows-1)){
			count = index;
			console.log(`for index: ${index}`);
			while(count < s.length){
				if(direction == 'down'){
					newS += s[count];
					console.log(`the value of count is : ${count} and s[count] is: ${s[count]}`)
					count += 2*(numRows-1-index);
				} else {
					newS += s[count];
					console.log(`the value of count is : ${count} and s[count] is: ${s[count]}`)
					count += 2*index;
				}

				direction = (direction == 'down') ? 'up' : 'down' ;
			}
		} else {
			count = index;
			console.log(`for else block index: ${index}`);
			while(count < s.length){
				newS += s[count];
				console.log(`the value of count is : ${count} and s[count] is: ${s[count]}`)
				count += 2*(numRows-1);
			}
		}
		index++;
	}

	return newS;
};

s='hjfla f fa nofauio mdc djcjaioe';
numRows = 23;
console.log(convert(s, numRows));

// console.log(newS)

