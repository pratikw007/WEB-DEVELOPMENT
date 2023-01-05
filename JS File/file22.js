// objects
// array are good but not sufficient 
// for real world data
// objects stores a key value pairs
// object don't have index 
// object denoted by {} 
// how to create object 

// const person = {name:"Ram",age:22}; //name and age is key value pair
const person = {
    name:"pratik",
    age:33,
    hobbies:["Dancing","singing"," listening"]
}
console.log(person);


// how to acess data from objects or calling of an object 
// console.log(person["name"]); or // console.log(person.name);
// console.log(person.age);


// how to add kay value pair in object 
person.gender = "male";
//or
person["gender"] = "male";
console.log(person);

