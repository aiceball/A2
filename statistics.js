var counter=0;
var stringToParse="";
do{
	counter++;
	var input = prompt("Enter it B");
	if(validateInput(input)) stringToParse+=input;
	if(counter==10) alert("You have exceeded invalid entry limit.");
}while(!input.includes(" ") && counter!=10);
console.log(stringToParse);

function validateInput(input) {
	var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";	//check for singular special chars, didn't go to further validation
	isANumber=!Number.isNaN(parseFloat(input));
	isEmpty=input=='';
	isSpecialChar=specialChars.includes(input);
	console.log("number? "+isANumber);
	console.log("empty? "+ isEmpty);
	console.log("is a spec char? "+ isSpecialChar);
	return (!isANumber&&!isEmpty&&!isSpecialChar);
}