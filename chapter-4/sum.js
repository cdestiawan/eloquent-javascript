"use strict";
const range = (start, stop, step=1) => {
    let arr = [];
    if (step > 0) {
        for (let i = start; i < stop + 1; i += step) {
            arr.push(i);
        } 
    } else if(step < 0) {
        for (let i = start; i >= stop; i += step) {
            arr.push(i);
        } 
    } 
    return arr;
}

const sum = arr => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));