// how to clone array

// How to concatenate two arrays

let array1 = ["item1","item2"];
// // let array2 = array1;
// let array2 = array1.slice(0);
// array1.push("item3");
// console.log(array1===array2);


// new way 
// Spread Operatoper
let array2 = [...array1];
array1.push("item3");


console.log(array1); 
// console.log(array2);