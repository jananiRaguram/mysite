function negNumber(x,y,z){
/*
var x = 3;
var y = 4;
var z = 4;
*/
var finalNumber = x * y * z;

if (finalNumber < 0) {
	alert("the product is a negative number," + " "+ finalNumber)
} 
else {
	alert("the product is a positive number," + " " + finalNumber)
	}
}

negNumber(2,4,6);