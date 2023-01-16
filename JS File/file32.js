// lexical scope : part of function
const myVar = "value1";

function myApp(){

    function myFunc(){
        //  const myVar = "value42";
        
        const myFunc2 = function(){
                 console.log("inside myFunc",myVar);
                 }   
                 myFunc2();

                }

    console.log(myVar);
    myFunc();   
}
myApp();




// 
//     const myFunc3 = () => {}