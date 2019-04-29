function biggerNumber (){
	var numberOne = prompt ("enter a number");
	var numberTwo = prompt ("enter a different number");

	if (numberTwo > numberOne) {
		document.getElementById("practice1").innerHTML= (numberTwo + " " + "is the bigger than " + numberOne);
	} else {
		document.getElementById("practice1").innerHTML= (numberOne + " " + "is the bigger than " + numberTwo);
	}	
}	


