// function in js

function singHappyBirthday(){
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

singHappyBirthday();


function Sum(){
    console.log(2+3);
}

Sum();

function sum1(){
    return 2+9;
}
console.log(sum1());

function Sum3(num1,num2){
    return num1 + num2;
}

const sumhai = Sum3(5,8); //num1 = 2 ,num2 = 6
console.log(sumhai);

// isEven  
// input : 1 number
// output : true ,false

function isEven(number){
    if(number%2===0){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

isEven(2);