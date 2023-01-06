// difference between dot and bracket notation
console.log("person");
const key = "email";
const person = {
    name:"harshit",
    age:33,
    "person hobbies":["sleeping","singing","listning"];

}

person[key] = "abc@gmail.com";
console.log(person);