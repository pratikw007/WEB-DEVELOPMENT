const person = {
    name:"Ram",
    age: 22,
    "Person Hobbies": ["Guiter","Singing","Dance"]
}

// for in loop

// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }

// Object.keys

// console.log(typeof(Object.keys(person)));

for(let key of Object.keys(person)){
    console.log(person[key]);
}