"use strict";
const min = (x, y) => {
    if (x < y) {
        return x;
    }
    return y;
}
console.log(`the returned value of min(4,5) is ${min(4, 5)}`); //return 4
console.log(`the returned value of min(9,5) is ${min(9, 5)}`); //return 5