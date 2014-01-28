/**
 * By Jeremy Suika for Expressions:Wacky, on 1/19/14.
 * worked on again on jab 28 2014
 */




///Strings

//Going to add up how much you spend on entertainment, and average it out, and compare it to the national average.

var myArray = new Array (); //create an array because I have so many variables.

myArray[0] =prompt("Cable T.V costs on average $65.00 a month, what do you spend?","do not place $ sign"); //Enter how much you spend on T.V a month
myArray[1] =prompt("What to you spend a month on cell/smart phone?");                                      //Enter how much you spend on cell phone
myArray[2] =prompt("What do you send on any other entertainment each month? Like movies, redbox, netflix, ect.");  //enter how much you spend on otherentertainment
myArray[3] =((myArray[0]*1)+(myArray[1]*1)+(myArray[2]*1)); //sum of the amount you will enter in the prompt


var intro="On average people spend $";                                          //This will be the first part of my string
var otherPeople=200.00;                                                            // This is how much the average person spends, this number will not be in a prompt
var secondPart =" a month for cable, phone and entertainment, you spend, ";      //second part of the string, the wording.
var math="$"+myArray[3];                                                        //This is a wasted varraible, did not need it, but its the TOTAL with a $ sign in front of it.
var thirdPart=" which is a $"+(myArray[3]-otherPeople)+" difference from the national average of ";  //The last part of the string, to complete the sentence




//test console
//console.log(tvHome);

console.log(intro+otherPeople+secondPart+math+thirdPart+"$"+otherPeople+".");   //the console that displays the results of the expression. The String is displayed here.

//console.log(thirdPart);