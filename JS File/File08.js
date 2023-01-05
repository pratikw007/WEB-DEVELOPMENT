// String concatenation 
let string1 = "harshit";
let string2 = "Wagh";

let fullNmae = string1 + " " + string2;
 
console.log(fullNmae);

let str1 = "20";
let str2 = "30";

let newString = +str1 + +str2;
//  +str1 convert str to number 
// +str2 convert  str to number
console.log(newString);

// ========================================================= 
// template string 
let age = 33;
let fname = "Pratik";

// let aboutMe = "My name is " + fname + " and my age is " + age;

let aboutMe = `my name is ${fname} and my age is ${age}`;
console.log(aboutMe)