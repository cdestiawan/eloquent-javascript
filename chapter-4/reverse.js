"use strict";

const reverseArray = arr => {
    const arr2 = [];
    const length = arr.length
    for(let i = 0; i < length; i++) {
        arr2.push(arr[length-i-1]);
    }
    return arr2;
}

const reverseArrayInPlace = arr => {
    const length = arr.length;
    const halfLength = length / 2;
    if(length <= 0) return [];
    for(let i = 0; i < halfLength; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}

//check behavior
const arr = [1, 2, 3, 4, 5];

console.log(reverseArray(arr));
console.log(arr);
console.log(reverseArrayInPlace(arr));
console.log(arr);

//check time
const arr2 = [];
for(let i = 0; i < 100000; i++) {
    arr2.push(i);
}

console.time("reverseArray");
reverseArray(arr2);
console.timeEnd("reverseArray");

console.time("reverseArrayInPlace");
reverseArrayInPlace(arr2);
console.timeEnd("reverseArrayInPlace");