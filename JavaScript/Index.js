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

// let numbers = [1,2,3,4,5,6,7];
// numbers2 = numbers;

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

// let arr = [10,20,30,40,50];
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
// arr.forEach(numbers=> console.log(numbers));


//------------------------
// join of arraay
// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',')

// console.log(joined);    //10,20,30,40,50

// spliting Of Array 

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts)

// -----------Sorting 
// let numbers = [4,3,1,5,2];

// numbers.sort();

// console.log(numbers);//[1, 2, 3, 4, 5]

// numbers.reverse();

// console.log(numbers); // [5, 4, 3, 2, 1]

// -------------------------Filtering Arrays-----------------

// let numbers = [1,2,-1,-4];

// let Filtered = numbers.filter(function(values){
//     return values >=0;
// });

// let Filtered = numbers.filter(values=> values >=0);

// console.log(Filtered)


// ----------------------Mapping of Array---------------
// let numbers = [7,8,9,10]

// // let items = numbers.map(function(value){
// //     return 'Student_no' + value;
// // });

// let items = numbers.map(value => 'Student_no' + value);

// console.log(items);

// --------------------------Filter in objects--------------

// let numbers = [1,2,-5,4,-9];

// let Filtered = numbers.filter(value => value >=0); //return value >=0


// let items = Filtered.map(function(num){
//     // object creeation
//    let obj = {value: num};
//    return obj;
    
// });


// let items = Filtered.map(function(num){
//     // object creeation
//    return {value: num};
// });
// ===============chaining ============

// let items = numbers
//                    .filter(value => value >=0) 
//                    .map(num => {value: num});
// console.log(Filtered);
// console.log(items)


// -------------------------Funcion in JavaScript-------------------

// function run(){
//     console.log("running")
// }

// run(); //function call

// =============================
// Hoistig :- It is the function declaration at the top of file 

// run(); //function call
// function run(){
//     console.log("running")
// }

// // ===============================================
// //Named   function assignment 
// let stand = function walk(){
//     console.log("Walking")
// }
// stand();

// // ===============================================
// //Anonymous function assignment -function name is not Defined
// let stand2 = function(){
//     console.log("talking")
// }
// stand2();
// =================================
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(3,4));
// =================================
// Arguments
// function sum(a,b){
//     let total = 0;
//     for (let value of arguments) {
//         total += value;
//         return total;
//     }

//     let ans = sum(1,2,3,4);
//     console.log(ans)
// }
// ----------------------------------
// Rest Operator
// function sum(...args){ // args is array 
// function sum(a,b,...args){ //args ke baat koi parameter pass nhi kr sakte boss 
//     console.log(args);
// }

// sum(1,2,3,4,5,6) //  [1, 2, 3, 4, 5, 6]


// -------------------------------------
// default parameter
//  console.log("Hello")
// function intrest(p,r=5.5,y=2){// 
//     return p*r*y/100;
// }

// let ans =intrest(1000,);

// console.log(ans)

// ------------------------------------------
// Getter--> access the property
//   Setters --> change or mutate properties

// let person = {
//     fName: 'Love',
//     lName: 'Babber',
//     get fullName(){
//         return`${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof value !== String ){
//             throw new ErrorEvent("You have not sent a string");
//         }
//         let parts =value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// try {
//     person.fullName(1);
// } catch (e) {
// alert(e);
//     // alert('Your are sent a number in full Name');
// }
// console.log(person.fullName);

// --------------------------------
// Scope 

// {
//     var b='Hello';
//     let a =5;
//     console.log(a)
// }

// console.log(b)
// ===========
// for(var i = 0;i<10;i++){

// }
// console.log(i)//10
// =================
// function a(){
//     const ab =7;
// }
// function b(){
//     const ab =7
//     console.log(ab)
// }
// console.log(b());
//  -----------------------------------------

// Reducing Array 
// let arr = [1,2,3,4,5]
// let total = 0;

// for (let value of a) 
//     total +=value;
//     console.log(total);


// let totalSum = arr.reduce((accumulator,currentValue)=>accumulator,currentValue,0);
// console.log("sum")
// console.log(totalSum)

// --------------------------__________--------------------------------









  

