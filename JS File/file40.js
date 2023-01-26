//map method


// const numbers = [3,4,6,8,1];


// const square = function(number){
//     return number*number;
// }
// const squareNumber = numbers.map(square);

// console.log(squareNumber);

const users = [
    {firstName : "Ram",age:44},
    {firstName : "Ratan",age:34},
    {firstName : "Pranay",age:43},
    {firstName : "Jasmin",age:33},
    {firstName : "Mogra",age:24}
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);

