var counter=0;
var stringToParse="";
var input=null;


window.onload = main();
function main(){
do{
	if(counter>=10){ 
		alert("You have exceeded invalid entry limit.");
		break;
	}
	input = prompt("Enter a string:");
	if(input==""){
		counter++;
		continue;
	}
	if(runMatching(input)===null){
		isInvalidInput(input)?counter++:counter=0;
		continue;
	}
	stringToParse+=runMatching(input).join("");
}while(!(input==" "));
}
document.getElementById('statsOut').innerHTML=stringToParse.length;


function isInvalidInput(stringToValidate){
	return !(stringToValidate.match(/^[0-9+=./?\-*&^%$#@!~|,]+$/gm)===null);
	console.log("pure digit?" + stringToValidate.match(/^[0-9]+$/gm));
	console.log("Contains vowels: "+(runMatching(stringToValidate)===null));
	return (runMatching(stringToParse)===null)&&(!Number.isNaN(parseFloat(stringToValidate)));
}
function validateInput(input) {
	// var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";	//check for singular special chars, didn't go to further validation
	isANumber=!Number.isNaN(parseFloat(input));
	isEmpty=input=='';
	// isSpecialChar=specialChars.includes(input);
	console.log("number? "+isANumber);
	console.log("empty? "+ isEmpty);
	console.log("is a spec char? "+ isSpecialChar);
	return (!isANumber&&!isEmpty);
}

function runMatching(stringToParse){
	return stringToParse.match(/[aoueiuy]+/gi);
}
//Take input
//is it a singular space? If so, terminate
//lowercase it
//parse for characters, concatenate whatever's matched into final response
//if parse returned empty, increase sin counter, otherwise reset it
//if sin counter reached 10, terminate