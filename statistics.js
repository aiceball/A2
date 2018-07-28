// ------------------------------------------------------------------------------
// Assignment 2
// Written by: Ayan Bikalapov ID# 27028741
// For SOEN 287 Section CC – Summer 2018
// ----------------------------------------------------------------------------- 
//This application finds whether the number entered by the user in the box is a square or not.
//It will then print out the sum of the digits of the number (i.e. if the number entered was 16, it will return 7)


var counter=0;
var stringToParse="";
var input="";
window.onload = main();	//just in case

function main(){
do{
	if(counter>=10){ 
		alert("You have exceeded invalid entry limit.");
		break;	//end the prompts after 10 consecutive incorrect entries
	}
	input = prompt("Enter a string:");
	if(input==""){	//skip empty carriage return
		counter++;
		continue;
	}
	if(runMatching(input)===null){	//exact match on a numeric string or a string with no vowels
		isInvalidInput(input)?counter++:counter=0;	//if it's an unacceptable string (numeric/special chars), increase the bad tries counter
		continue;
	}
	stringToParse+=runMatching(input).join("");	//if vowels present, collect them
}while(!(input==" "));	//continue until blank space is entered (only blank space)
}
document.getElementById('statsOut').innerHTML=stringToParse.length;	//output final result to div


function isInvalidInput(stringToValidate){
	return !(stringToValidate.match(/^[0-9+=./?\-*&^%$#@!~|,]+$/gm)===null);	//if only digits and/or spec chars, return true
}

function runMatching(stringToParse){
	return stringToParse.match(/[aoueiuy]+/gi); //filter out vowels, ignore case
}