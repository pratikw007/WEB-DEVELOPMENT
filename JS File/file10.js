// boolean and comparision operator
let num1 = 9;
let num2 = "9";
// console.log(num1>num2);
console.log(num1<=num2);


// let num1 = 9;
// let num2 = "9";

// == v/s ===
console.log(num1 == num2); // check the conditon not datatype
console.log(num1===num2); // check the condition as well as datatype


//!= v/s !==
console.log(num1 != num2); 
console.log(num1 !== num2); 

// ================================

// if else condition 

let age = 14;

if(age>=18){
    cosole.log("User play game");
}
else{
    console.log("User Can't Play Game");
}
let num = 15;

if(num%2===0){
    console.log("Even");
}
else{
    console.log("Odd");
}



// falsy value
// false
// ""
// null
// undefined
// 0



let fname;
if(fname){
    console.log(fname);
}
else{
    console.log("abc");
}


// ================ 

let aged = 4;
let drink;

if(age>=5){
    drink = "coffee";
}else{
    drink = "milk";
}
console.log(drink); //coffee ee