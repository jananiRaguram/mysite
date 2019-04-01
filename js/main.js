function biggerNumber (){
	var numberOne = prompt ("enter a number");
	var numberTwo = prompt ("enter a different number");

	if (numberTwo > numberOne) {
		console.log(numberTwo + " " + "is the bigger number");
	} else {
		console.log(numberOne + " " + "is the bigger number");
	}	
	alert("check your're console")
}	

function negNumber(){
var x = 3;
var y = 4;
var z = 4;
var finalNumber = x * y * z;

if (finalNumber < 0) {
	alert("the product is a negative number," + " "+ finalNumber)
} 
else {
	alert("the product is a positive number," + " " + finalNumber)
	}
}

function numberOrder() {
	var x = prompt ("enter a number");	
	var y = prompt ("enter another number");
	var z = prompt ("enter the last number");

	var numbers = [ x, y, z];
	numbers.sort (function (a,b){
		return b-a;

	});
	alert(numbers);
	
}
