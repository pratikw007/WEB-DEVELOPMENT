// write a program that prints the numbers from 1 to 100.But for multiple of three print "Fizz" instead of 
// the number and for the multiples of five print "Buzzz".For an numbers which are multiples of both three and five print "FizzBuzz".

var output = [];
var count = 1;

function fizzBuzz() {
    // output.push(count);
    // count++;
    // console.log(count)
 if(count % 3 === 0 && count % 5 ===0){
     output.push("FizzBuzz");
 }   
else if(count%3===0){
    output.push("Fizz");
}

else if (count % 5 === 0) {
   output.push("Buzzz");
}
else {
        output.push(count);
    }

count++;
    console.log(output);
}