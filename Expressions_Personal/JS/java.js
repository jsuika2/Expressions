/**
 * By Jeremy Suika for Expressions:Personal, on 1/19/14.
    Finished on 1/28/2014
 */

//Going to see how how many miles a friend and me run. I will convert that formula to kilometers. And see if he got to his goal of 20 kilometers in the week.


alert("I have a friend who is on holiday from Europe. He loves to run for exercise")
alert("He likes to run 20 kilometers each week, but he needs help to convert miles to kilometers for our group run.")

var dayOne =prompt("How many miles did he run on Day 1?","");
var dayTwo =prompt("How many miles did he run on Day 2?","");
var dayThree =prompt("How many miles did he run on Day 3?","");
var dayFour=prompt("How many miles did he run on Day 4?","");
var meter=.62137;

var total =( (dayOne/meter)+(dayTwo /meter)+(dayThree/meter)+ (dayFour/meter))


num = total;
result = num.toFixed(1);



console.log(total);
console.log("He ran a total of "+result+" km this week.");

