"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// TS sees no problem, but it will return as a string
let newVal = addOrConcat(2, 2, 'concat');
// 10 as string
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.querySelector('#img');
const newImg = document.querySelector('#img');
img.src;
myImg.src;
