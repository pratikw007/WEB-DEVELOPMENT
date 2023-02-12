var myName = "Angela";
var yourName = prompt("What is your name?");
    alert("My Name is" + myName + ", Welcome to my course"+ yourName+";");

var ganeLevel = 1;
ganeLevel = 2;
ganeLevel = 3;
alert("Your Leevel is Currently : " + ganeLevel);

function test() {
    var a = "3";
    var b = "8";
// **************************
// Do Not change the code 
    var temp = a;
    a = b;
    b = temp;
    // *************************
    console.log("a is "+ a);
    console.log("b is "+ b);
}

test();
// ***************name convention************
var Myname = "Angela";
var yourName = "Jack bauer";
var myvar = "abc";
var my123 = 123;
var myName = "Angela";
var abc$_ = true;


alert("Welcome" + " "+"Ram");

var msg = "Ram";
var a = "Waghmare";
alert(msg+" "+"Raj"+" "+a);

let b = "Prateek";
let a = "Hello";
alert(a + " there,"+" "+b)



// you have written 182 charecter,you have -42  charechters left. 
var name = "Angela";
var tweet = prompt("composed your tweet: ");
var tweetCount = tweet.length;
// console.log(tweetCount);
    alert("You have writen" +tweetCount + "charecters,  you have"+ (140- tweetCount)+" chatecters remaining");



slising in javascript 
var name = "Angela";
name.slice(0,3);

alert(prompt("Composed your tweet: ").slice(0,140));



uuppercase lettters

var name = "pratik";
name.toUpperCase();

var name = prompt("What is your name? ");
alert("Hello " + name);


1 >>> create a var that stores the namme that user enters via prompt
var name   = prompt("What is your name: ");
// 2 >>> capitalize the first letter of their name.
        // a. isolate the firt charecteter.
var firstCar = name.slice(0,1);
        // b. Turn the first char to upper case.
var upperCaseFirstChar = firstCar.toUpperCase();
        // c. Isolate the rest of the name.
var restOfName = name.slice(1,name.length);
        // d.concatinate the first char with the rest of char 
 restOfName = restOfName.toLowerCase();

        //e. concatenate the first char with the rest of the car 
var capitalisedName = upperCaseFirstChar + restOfName;
// 3 >>> we used to capitalized the version of their name to greet them using an alert.
alert("Hello " + capitalisedName);

let dogAge = prompt("How old is your dog??");
let humanAge = (dogAge -2)* 4 + 21;
// console.log(humanAge);
alert("Your dog is "+ humanAge + " years.");