"use strict";

for(let i = 0; i < 100; i++) {
    let num = i + 1;
    if(num % 15 == 0) {
        console.log("FizzBuzz");
    } else if(num % 3 == 0) {
        console.log('Fizz');
    } else if(num % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}
