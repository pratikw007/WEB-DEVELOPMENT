// important array methods

const numbers = [4,2,5,8];

function muliplyBy2(number,index){
    console.log("index is ", index);
    console.log(number*2); //8
    console.log(`index is ${index} number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`); //4*2 = 8
}

// muliplyBy2(numbers[0], 0);

    for(let i = 0;i<numbers.length;i++){
            // console.log(i);
            muliplyBy2(numbers[i],i);
    }