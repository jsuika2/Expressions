/**
 * By Jeremy Suika for Expressions:Personal, on 1/19/14.
    Finished on 1/28/2014
 */

//Going to see how how many miles a friend runs. I will convert that formula to kilometers. And see if he got to his goal of 20 kilometers in the week.


alert("I have a friend who is on holiday from Europe. He loves to run for exercise")  //explaining that the friend loves to run, the first explanation of the problem
alert("He likes to run 15 kilometers each week, but he needs help to convert miles to kilometers for our group run.")  //the second part of the explanation, mentioning there will be conversions.

var dayOne =prompt("How many miles did he run on Day 1?","");  //input miles for day 1
var dayTwo =prompt("How many miles did he run on Day 2?","");   //input miles for day 2
var dayThree =prompt("How many miles did he run on Day 3?",""); //input miles for day 3
var dayFour=prompt("How many miles did he run on Day 4?","");   //input miles for day 4
var meter=.62137;   //this number is the amount of kilometers in a mile, it will be in the conversion below.

var total =( (dayOne/meter)+(dayTwo /meter)+(dayThree/meter)+ (dayFour/meter))   //divide the miles each day ran by .62137 or "Meter" VAR, and add each of the 4 days together


num = total;                    //the result of the TOTAL had over 6 to 7 numbers after the decimal point, this formula made it cleaner.
result = num.toFixed(1);        //Fixed Point one resulted in a number like: 23.3 or XX.X, I did not need more then one number after decimal point



//console.log(total);  A test console
console.log("He ran a total of "+result+" km this week. This goal was 15 km.");  //The results of the expression in the CONSOLE. How many km my freind ran.

