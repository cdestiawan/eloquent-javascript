"use strict";

const countChar = (str, char) => {
    let charCount = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            charCount++;
        }
    }
    return charCount;
}

const countBs = str => {
    return countChar(str, 'B');
}

const str = 'Big Brother is watching you my boy';
console.log(`countBs(${str}) is ${countBs(str)}`);
console.log(`countChar(${str}) is ${countChar(str, 'i')}`);