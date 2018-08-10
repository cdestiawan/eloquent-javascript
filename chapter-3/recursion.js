"use strict";

const isEven = number => {
    // if number is negative then make it positive
    if (number < 0) {
        number = -1 * number;
    }

    if (number == 0) {
        return true;
    } else if (number == 1) {
        return false;
    }
    
    return isEven(number - 2);
}

for (let i = -10; i < 10; i++) {
    console.log(`return value of isEven(${i}) is ${isEven(i)}`);
}

