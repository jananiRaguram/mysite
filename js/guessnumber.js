function guessNumber(){
	var number = Math.floor((Math.random()*10)+1); 
		console.log(number);
	
	var guess= prompt('guess the number from 1 to 10');

	while (guess !== number){
		if(guess< number){
			guess=prompt('higher, try again');
		}
		else if (guess > number){
			guess= prompt('lower, and try again');
		}	
		else {
			guess= alert('you got it! The number is ' + number + ".");
			break;
		}
	}
}
