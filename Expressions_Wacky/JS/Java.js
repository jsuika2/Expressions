/**
 * By Jeremy Suika for Expressions:Wacky, on 1/19/14.
 * worked on again on jab 28 2014
 */




///Strings

//Going to add up how much you spend on entertainment, and average it out, and compare it to the national average.

var myArray = new Array ();

myArray[0] =prompt("Cable T.V costs on average $65.00 a month, what do you spend?","do not place $ sign");
myArray[1] =prompt("What to you spend a month on cell/smart phone?");
myArray[2] =prompt("What do you send on any other entertainment each month? Like movies, redbox, netflix, ect.");
myArray[3] =((myArray[0]*1)+(myArray[1]*1)+(myArray[2]*1));


var intro="On average people spend "
var otherPeople=175




//test console
//console.log(tvHome);

console.log(intro);

console.log(myArray[3]);