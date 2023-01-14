// Spread Operator(mixed karna array ko)
const array1 = [1,2,3];
const array2 = [5,6,7];

// const newArray = [...array1,...array2];//array1 & array2 ke pure element newArray mai aa jayenge
// const newArray = ["...123456789"]; //['...123456789']
// const newArray1 = [..."123456789"];  ) ['1', '2', '3', '4', '5', '6', '7', '8', '9']0: "1"1: "2"2: "3"3: "4"4: "5"5: "6"6: "7"7: "8"8: "9"length: 9[[Prototype]]: Array(0)
// console.log(newArray1);

// Spread operator in objects

const obj1 = {
    Key1: "value1",
    Key2:"value2"
};

const obj2 = {
    key1:"ValueUnique",
    Key3: "value3",
    Key4:"value4"
};

// const newobject = {...obj2,...obj1,key69:"hello"};
const newobject ={..."abcdefghijklmnopqrstuvwxyz"}
console.log(newobject);
