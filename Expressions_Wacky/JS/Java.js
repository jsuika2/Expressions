/**
 * By Jeremy Suika for Expressions:Wacky, on 1/19/14.
 */
    //going to add how much energy drink John and Jill drank, add them up together. Multiply that number by .0625 that equals what the number is in pounds.


var myArray =new Array ();
myArray[0] = "milkDrankJohn";
myArray[1] = "milkDrankJill";
myArray[2] =  "days"
myArray[3] = .0625                          //this is what you multiply to convert oz. to gallons



var milkDrankJohn = prompt ("How many oz. does John drink daily?",10); //going to be the first part of the formula, add this to the girl's
var milkDrankJill = prompt ("How many oz. does Jill drink daily?",20);
var days          = prompt ("How many days are energy drink needed?",5);



var total = "(myArray[0]+myArray[1])* myArray[2] *myArray[3]";   //does not work bt tried it;


console("total");






var Gallons;

Gallons= milkDrankJohn * 7;








console.log(Gallons);



162.29 // toFixed(2)