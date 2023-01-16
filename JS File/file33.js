// // block scope vs fuction scope 

// // let and const are block scope = ye { } ke uder hi access ho sakta
// // var is function scope = ye kahi bhi access ho sakta outside the block bhi


// // block 1 
// {
//     let fname = "Ram";
//     console.log(fname);

//     const lname = "off";
//     console.log(lname);

// }

// // block 2
// {
//     var lname = "waghmare";
// }
// console.log(lname); //waghmare

// // ye block alg hai file wala 
// // block 3
// let age =30;
// console.log(age);

// __________________________________________

// {
//     var fname = "Ram";
// }

// {
//     var fname = "raj";
// }


// console.log(fname);//raj

// ___________________________________________________________

// let fname = "ddd"
function    myApp(){
    if(true){
        var fname ="ram";
        console.log(fname);
    }
    if(true){
        console.log(fname);
    }
        console.log(fname);
}
myApp();