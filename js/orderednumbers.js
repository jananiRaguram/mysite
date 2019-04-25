function numberOrder() {
	var x = prompt ("enter a number");	
	var y = prompt ("enter another number");
	var z = prompt ("enter the final number");

	var numbers = [ x, y, z];
	numbers.sort (function (a,b){
		return b-a;

	});
	document.getElementById("demo").innerHTML = (numbers);
	
}
