// ------------------------------------------------------------------------------
// Assignment 2
// Written by: Ayan Bikalapov ID# 27028741
// For SOEN 287 Section CC – Summer 2018
// ----------------------------------------------------------------------------- 
//This application will plot the number of occurences of digits within a number, both presented by the user.
//Plotly was used for this example. X axis is limited from 0 to 9, with a sequential print (i.e. if there exists a 
// 1 and a 5, 1 2 3 4 5 will all be present on x axis)


//main function
function calculateOccurences(){
	//pick up user input
	var chosenDigits=document.getElementById("chosenDigits").value;
	var range=document.getElementById("range").value;
	//prepare it for parsing
	var splitRange=range.split("");
	var splitChosens=chosenDigits.split("");
	var finalOccurenceList=[];
	//for every digit to find, iterate through the number presented
	for(chosenDigit in splitChosens){
		var counter=0;
		for(rangeDigit in splitRange){
			if(splitRange[rangeDigit]==splitChosens[chosenDigit]){
				counter++;
			}
		}
		finalOccurenceList[chosenDigit]=counter; //populate the number of repeats for each digits in the chosen digit lists
	}
	plotGraph(stringify(chosenDigits),finalOccurenceList); //plot graph, stringify digits in first array beforehand because plotly was acting weird
}

//simply convert ints to strings
function stringify(array){
	var arrayB=[]
	for(i in array)
		arrayB[i]=""+array[i];
	return arrayB;
}

//plot the graph using plotly API
function plotGraph(xAxis,yAxis){
var data = [{
  x: xAxis,
  y: yAxis,
  type: 'bar',
  marker: {color: 'rgb(0, 0, 179)'},
}];
var layout = {
  title: 'Assignment 3 Table',
  xaxis: {
    title: 'Digits',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  },
  yaxis: {
    title: 'Count',
    titlefont: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#7f7f7f'
    }
  }
};
Plotly.newPlot('graphDiv', data, layout);
}