// callback function

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`Your Name is ${name}`);
 
}

function myFunc1(a){
    console.log("I am Pratik");
       a("Ram");
}

myFunc1(myFunc2); //apn function myFunc1 ko call kr rhe but myFun2 call ho rha Samje kya :-)
// that is called callback
// pahle function 1 call then function 2 call

