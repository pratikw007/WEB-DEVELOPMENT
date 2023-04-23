// sync code
// function sync(){
//     console.log("first");
// }

// sync();
//   console.log('Second');

// Async Code 
// setTimeout(function(){
//     console.log('third');
// }, 3000);

// function sync(){
//     console.log('first');
// }

// sync();
// console.log('second');

//promises

// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I Am Promise1');
//     },3000);
//     reject(new Error('Error Hai Bro'));
//         // resolve(4933);
// });

// meraPromise1.then((value)=> {console.log(value)});

// meraPromise1.catch((error)=> {console.log('Recceved an error')})
// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('I Am Promise2');
//     },5000);
// })

//    console.log('phle')






// let  Waada1 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log('SetTimeout1 started')
//     }, 2000);
//     resolve(true);
// })

// let output = Waada1.then(()=>{
//     let Waada2 = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('SetTimeout2 started')
//         }, 2000);
    
//         resolve("waada 2 resolved")
//     })
//     return Waada2;
// })
// output.then((value) => console.log(value))




//async await

// async function abcd(){
//     // console.log('hello')
//     return "babber";
// }
// console.log(abcd());
// async function utility(){

//     let delhiMousam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me bhot thand hai")
//         },20000)
//     })
    
//     let maharastraMousam = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me bhot thand hai")
//         },1000)
//     })
//  let dM =await delhiMousam;   
//  let mM = await maharastraMousam;
//  return [dM,mM];
    
// }

 
// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let output = await content.json();
//     console.log(output)
// }

// console.log(utility());


function init(){
    let  name = 'Pratik';
    function hello(){
        console.log('Hey')
    }
    hello();
}

init();