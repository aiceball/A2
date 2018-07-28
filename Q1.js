// ------------------------------------------------------------------------------
// Assignment 2
// Written by: Ayan Bikalapov ID# 27028741
// For SOEN 287 Section CC – Summer 2018
// ----------------------------------------------------------------------------- 
//This application finds whether the number entered by the user in the box is a square or not.
//It will then print out the sum of the digits of the number (i.e. if the number entered was 16, it will return 7)


//Entry point
function main(){
	input=parseFloat(document.getElementById("input").value);
	if(validateNumber())
		analyzeNumber();
}

//validate if the input is a digit, throw alert otherwise
function validateNumber() {
	if(!Number.isNaN(input)){
		return true;
	}
	alert("Please enter numeric value");
	return false;
}

//see if the number is a square of something
function analyzeNumber() {
	closestValue=Math.sqrt(input);
	moduloValue=input%closestValue;	//a square number will have a remainder of 0
	summedDigits=0;
	if(moduloValue==0){
		alert(input+" is a squared number");
		sumDigits();
	}
	else
		alert(input+" is not a squared number");
}

//convert the number into a string, then split into an array, convert back into numeric values and add them
function sumDigits() {
	splitArray=closestValue.toString().split('');
	for(var digit in splitArray)
			summedDigits+=Number(splitArray[digit]);
	document.getElementById("output").innerHTML = "Output: "+summedDigits;
}
