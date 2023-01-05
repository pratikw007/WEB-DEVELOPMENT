//trim()
// toUpperCase()
// toLowerCase()
// slice


// note: String are immutable it can't be changable

let firstName = "       Pratik      ";

console.log(firstName.length);

firstName = firstName.trim();  //"pratik"  //trim

console.log(firstName);

console.log(firstName.length);




// ---------------------------------------

let lastName = "waGHmare";
// toUpperCase
console.log(lastName.toUpperCase()); //uppercae 
console.log(lastName.toLowerCase());//lowercase

// slice(start index, end index);
let newString = lastName.slice(0,5); //sring are immutable  --> waghm

console.log(newString);

