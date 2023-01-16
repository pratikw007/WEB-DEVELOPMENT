// rest parameter

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);//5,6,7,8,0,9,90,7
//     console.log(`c is`,c); //[5, 6, 7, 8, 0, 9, 90, 7]
// }

// myFunc(3,4,5,6,7,8,0,9,90,7); 


function addAll(...numbers){
    // console.log(numbers);
    // console.log(Array.isArray(numbers)); //1, 2, 3, 4, 5, 6, 7, 8]
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(1,2,3,4,5,6,7,8,9);
console.log(ans);