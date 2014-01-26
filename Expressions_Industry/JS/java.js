/**
 * By Jeremy Suika for Expressions:Industry, on 1/19/14.
 */


//  I drink a lot of sodas and coffee when working on web design projects. How much grams of sugar in a work week do I consume?
      // Going to add how many coffees and sodas I drink each day, figure out how much sugar consumed each day and then multiply that by days worked.
//



alert("Working long hours on web design projects sometimes requires a little caffeine or soda pick me up. ") //What everyone will see to explain problem

alert("We will see how much sugar we consume in week...")                                                    //The second part of the explanation.


var sodaDaily = prompt ("How many cans of XYZ brand soda do you drink daily?","");      //Need to know to how many cans to calculate how much sugar drank.

var coffeeDaily =prompt("How many cups of cofee you drink daily?","");       //This will be the second part of the formula, going add soda can total+coffe total


var sodaTotal =sodaDaily*39;  //In this example there are 39 grams of sugar per can of soda, (Each Can drunk multiply by 39)
var coffeeTotal = coffeeDaily *16; //We will say we have 16 grams of sugar per cup of coffee, (Each Coffee drunk multiply by 16)

var drinkTotal =coffeeTotal+sodaTotal; //the total grams of how much coffee and soda drank daily;

var daysWork =prompt("How many days do you work a week?","") //How many days we will drink coffee and soda.


var total;                           //to get the total, we multiply the days drinking by the daily total of grams from the drinks in "drinkTotal"
total = daysWork*(drinkTotal);       // the total, the final answer to how many days drunk

console.log("You will drink a total of " +total+ " grams of sugar consumed in a week."); //the display of the whole expression

//var myArray =new Array ();
//myArray[0] = sodaDaily;
//myArray[1] = coffeeDaily;
//myArray[2] =  days
//myArray[3] = .0625




