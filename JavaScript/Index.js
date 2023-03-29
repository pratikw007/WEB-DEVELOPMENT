console.log("Hello JavaScript - II")
// Object creation 

// let rectangle = {
//         length: 2,
//         breadth : 5,
//         // add Behaviour
//         draw: function() {
//             console.log('draw karna hai');
//         }
//     };

// // factory function 
// function createRect(){

// let rectangle = {
//     length: 2,
//     breadth : 5,
//     // add Behaviour
//     draw: function() {
//         console.log('draw karna hai');
//     }
// };
// return rectangle;
// }

// let rectangleObj1 = createRect();



// ------------------------------------

// function createRect1(len,bre){

//     let rectangle = {
//         length: len,  //    length ,//or   
//          breadth : bre, //      breadth,//or 
//         draw() {
//             console.log('draw karna hai');
//         }
//     };
//     }

//     let RectObj1 = createRect1(6,6);
//     let RectObj2 = createRect1(7,5);
//     let RectObj3 = createRect1(4,7);

//     // Constructor Function ----> PasCal Notation

//     function Rectangle(len,bre){
//             this.length = len;
//             this.breadth = bre;
//             this.draw = function(){
//                 console.log("Heeeeeelo");
//             }
//     }

//     // object creation using constructor
// let rectangleObj2 = new Rectangle(4,6);

// rectangleObj2.color = 'yellow';
// console.log(rectangleObj2);

// delete rectangleObj2.color;
//  console.log(rectangleObj2);




//  let a = 10;
//  let b = 10;

//  a++;
//  console.log(a);
//  console.log(b)



// let  a = {value:10};
// let  b = a;

// a.value++;
// console.log(a.value); // 11
// console.log(b.value);  //11


// let a = 10;
// function hello(a){
//     a++;
// }
// hello(a);
// console.log(a)


// let a  = { value:10};

// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a.value);// 11
// -----------------------------important topic -----------------------------
// let rectangle = {
//     length:2,
//     breadth:4
// };
//     // for-in loop

//     for(let key in rectangle){
//         //keys are reflected through key variable
//         // values are reflected through rectangle[key]
// console.log(key,rectangle[key]); // key = key-value pair like length breadth 
// // rectangle[key] ====> rectangle.length    breadth.length
// //bracket Notation

// for-of loops 
// for(let key of Object.keys(rectangle)){//Object is keyword
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)){//Object is keyword
//     console.log(key);
// }
// -------------------------------
// if('color' in rectangle){//chect whether the  color present or not
// if('length' in rectangle){
//     console.log("Present")
// }else{
//     console.log("Absent")
// }




// ==================================clone object===========
let src = {
    a:10,
    b:20,
    c:30
};

// let desti = {};

// for(let key in src){
//     desti[key] = src[key];
// }

// console.log(desti);

// src++; //to check clone sucessfully
// ==================
// using object #2

// let desti = Object.assign({},src);

// console.log(desti) // clone 

// src.a++;

// console.log(desti) //check
// ==========
//using Spread Clone 

// let desti = {...src};

// console.log(desti); //clone

// src.a++;

// console.log(desti) //check
// ------------------------------------------
// templaate Litral

// let lastName = 'Waghmare';

// let message = 
//     `Hello ${lastName}, 
    
    
//     Thanks for the Opportunity!!
    
//     Regards
//     Babber`;

    // console.log(message); //${lastName} -- PlaceHolder

// ----------------------
// Date ad time
// let date = new Date(); //1

// let date2 = new Date('May 16 2003 04:30');//2

// let date3 = new Date(2000, 00, 20,23 )

// date3.setFullYear(2008) // 20000 chage to 2008
// console.log(date);

// -------------------------------------------------

// Arrays
//
// let  numbers = [1,2,34,42]

// console.log(numbers);

// end -->push method
// starting --> unshift
// middle-->splice

// searching
// console.log(numbers.indexOf(34));

// we want tocheck iif the numbers exits in array or Not 

// console.log(numbers.includes(5));

// console.log(numbers.indexOf(4,2))


// let courses = [ 
//     {no: 1, naam:'love'},
//     {no: 2,naam:'Ram'}
// ];
// console.log(courses)

// indexof object cant find by indexOf Method

// -==============================
// callback function

// let course = courses.find(function(course){
//     return course.naam==='love';
// });

// //array main se aisa course find kar rhe jiska naam love hai  

// console.log(course);

// ======================
// arrow Function
// let course = courses.find(course=> course.naam==='love');

// console.log(course);

// --------------------

// Removing Element 

// let numbers = [1,2,3,4,5,6,7];
// numbers.pop(); //last element Delete
// numbers.shift();//startig element delete
// numbers.splice(2,1); //middle
// console.log(numbers);



// -----------------------------------------
// Emptying an array 

let numbers = [1,2,3,4,5,6,7];
numbers2 = numbers;

// ============
// numbers=[];

// console.log(numbers);   //empty array 

// console.log(numbers2); //adreesss can be copying




// most 
// ========================  //empty array =================imp 
// numbers.length = 0;

// console.log(numbers);   
// console.log(numbers2);

// ========================  //empty array -----------imp
// numbers.splice(0,numbers.length)

// console.log(numbers);   
// console.log(numbers2);

// ---------------------------
// combining And Slicing of Array

// let first = [1,2,3]
// let second = [4,5,6]

// let combined = first.concat(second)

// console.log(combined) //[1, 2, 3, 4, 5, 6]

// let slice = combined.slice(1,3);

// console.log(slice);


// -----------------------------------

// Spread Operator for combining
// let first = [1,2,3]
// let second = [4,5,6]

// // let combined = [...first,...second] // [1, 2, 3, 4, 5, 6]
// let combined = [...first,'a',...second,'b']
// console.log(combined)

// // copy kaise create karu

// // let another[...combined];

// ----------------------------------- 
// iterating an array 

let arr = [10,20,30,40,50];
// =====================For of loop    
// for(let value of arr){
//     console.log(value)
// }

// ===================For Each Loop
// callback
// arr.forEach(function(numbers){
//     console.log(numbers)
// });

// using arrow function =============
arr.forEach(numbers=> console.log(numbers));




















  

