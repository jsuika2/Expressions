/**
 * By Jeremy Suika for Expressions:Industry, on 1/19/14.
 */


//  I drink a lot of sodas and energy drinks when working on web design projects. How much grams of sugar in a work week do I consume?
      // Going to add how many energy drinks and sodas I drink each day, figure out how much sugar consumed each day and then multiply that by days worked.

//Also I will use Arrays and figure out how much oz. of sugar, I will convert grams to oz.



alert("Working long hours on web design projects sometimes requires a little caffeine or soda pick me up. ") //What everyone will see to explain problem

alert("We will see how much sugar you can consume in week...")                                                    //The second part of the explanation.


var sodaDaily = prompt ("How many cans of XYZ brand soda do you drink daily?","");      //Need to know to how many cans to calculate how much sugar drank.

var energyDrinkDaily =prompt("How many cans of energy drink you drink daily?","");       //This will be the second part of the formula, going add soda can total+energy drink total


var sodaTotal =sodaDaily*39;  //In this example there are 39 grams of sugar per can of soda, (Each Can drunk multiply by 39)
var energyDrinkTotal = energyDrinkDaily *25; //We will say we have 25 grams of sugar per cup of Energy drink (Each energy drunk multiply by 25)

var drinkTotal =energyDrinkTotal+sodaTotal; //the total grams of how much energy drink and soda drank daily;

var daysWork =prompt("How many days do you work a week?","") //How many days we will drink coffee and soda.


var total;                           //to get the total, we multiply the days drinking by the daily total of grams from the drinks in "drinkTotal"
total = daysWork*(drinkTotal);       // the total, the final answer to how many days drunk

console.log("You will drink a total of " +total+ " grams of sugar consumed in a " + daysWork + " day work week."); //the display of the whole expression

var myArray =new Array ();
myArray[0] = total;              //total is the amount of grams of sugar in a week
myArray[1] = 0.035274               ////oz per gram
myArray[2] = 0.0022046              //pounds per gram  -end up not useing this Array,
myArray[3] = myArray[0]*myArray[1]       //total sugar used in grams multiply by .035274 (

num = myArray[3];             //found this online, I am sure there is a cleaner way to do this, but I forgot it
result = num.toFixed(2)       //I only wanted to display the second number after the decimal point, so I input a 2

console.log("Also " +myArray[0]+ " grams of sugar equal " +result+ " oz. of sugar."); the second part of the formula displayed




//tester console            //a test console
//console.log(result)

