//  array  Distructuring

const myArray = ["value1","value2","Hello","Bye"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("Value of myvar1",myvar1);
// console.log("Value of myvar2",myvar2);
let [m1,m2,...myNewArray] = myArray;
// let myNewArray = myArray.slice(2);
console.log("Value of myvar1",m1);
console.log("Value of myvar2",m2);
console.log(myNewArray)

  