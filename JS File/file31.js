// hoisting

// hello();
 
// function hello(){
//     console.log("Hello World");
// }

//  function inside function 

const app = () => {
    const myFunc = () => {
        console.log("Hello");
    }

    const addTwo = (num1,num2) => {
        return num1+num2;
    }

    const mult = (num1,num2) => num1*num2;

    console.log("inside app");
    myFunc();
   let ans = addTwo(3,5);//addtion
   console.log(ans);

   let ans1 = mult(3,5); //multiply
   console.log(ans1);
}

app();