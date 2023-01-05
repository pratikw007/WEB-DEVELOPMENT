// for in loops in array 

const fruits = ["apple","mango","grapes","Banan"];
const fruits2 = [];

for(let index in fruits){
        fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2)

// ['APPLE', 'MANGO', 'GRAPES', 'BANAN']  o/p