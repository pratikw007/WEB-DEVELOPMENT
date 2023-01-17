// function returning function
// functiom ke under function return karta
function myFunc(){

    function hello(){
        console.log("Hello world");
    }
    return hello;
    // return {name: "ram",age: 44};
}

const ans = myFunc();
// console.log(ans);

// o/p 
// ƒ hello(){
    // console.log("Hello world");
// }

console.log(ans()); 
