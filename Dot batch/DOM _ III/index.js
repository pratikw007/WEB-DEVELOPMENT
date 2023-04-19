// //adding 100para
//     const t1 = performance.now();
// for (let i = 0; i <= 100; i++) {
//    let newElement = document.createElement('p');
//    newElement.textContent = 'This is Para' + i;
   
//    document.body.appendChild(newElement);
// } 

// const t2 = performance.now();
// console.log("this look "+(t2-t1)+ " ms");


// // optimizing a bit 


// const t3 = performance.now();

// let myDiv = document.createElement('div'); //Div ko Create Kiya

// for (let i = 0; i <= 100; i++) {
//     let element = document.createElement('p'); //create a para element
//     element.textContent = 'This is Para' + i;
    
//     myDiv.appendChild(element);// attached to the div 
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("this look "+(t4-t3) + " ms");

let fragment = document.createDocumentFragment();
for (let i = 0; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para' + i;
    
    document.body.appendChild(newElement);
 } 
 document.body.appendChild(fragment);  //single reflow



 function addPara(){
    let para =document.createElement('p');
      
 }