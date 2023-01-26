// important array methods

const numbers = [4,2,5,8];

// function muliplyBy2(number,index){
//     // console.log("index is ", index);
//     // console.log(number*2); //8
//     console.log(`index is ${index} number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`); //4*2 = 8
// }

// // muliplyBy2(numbers[0], 0);

//     // for(let i = 0;i<numbers.length;i++){
//     //         // console.log(i);
//     //         muliplyBy2(numbers[i],i);
//     // }

//     numbers.forEach(myFunc);

    // 6:26 20.01.2023  done


    // numbers.forEach(function(number){
    //     console.log(number*2);
    // });

    const users = [
        {firstName : "Ram",age:44},
        {firstName : "Ratan",age:34},
        {firstName : "Pranay",age:43},
        {firstName : "Jasmin",age:33},
        {firstName : "Mogra",age:24}
    ]

    // users.forEach(function(user){
    //         console.log(user.firstName)
    // });

    users.forEach((user,index)=>{
        console.log(user.firstName,index);
    })
    // for(let user of users){
    //     console.log(user.firstName)
    // } 