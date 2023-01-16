// parameter Destructuring 

// object 
// react

const person = {
    fname:"Ram",
    gender:"male",
    age: 34
};

// function printDetails(obj){
//     console.log(obj.fname);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

function printDetails({fname,gender,age}){
    console.log(fname);
    console.log(gender);
    console.log(age);
}

printDetails(person); 