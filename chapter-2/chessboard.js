"use strict";

// change width and height anything you want
let width = 9;
let height = 5;

const space = ' ';
const pound = '#';

let chessboard = '';
let j = 0;
for (let i = 0; i < height; i++) {
    
    if(i % 2 == 0) { // if i is even, then start with space, otherwise start with pound
        for (let j = 0; j < width; j++) {
            if(j % 2 == 0) {
                chessboard += space;
            } else {
                chessboard += pound;
            }
        }
    } else {
        for (let j = 0; j < width; j++) {
            if(j % 2 == 0) {
                chessboard += pound;
            } else {
                chessboard += space;
            }
        }
    }
    chessboard += '\n';
}

console.log(chessboard);