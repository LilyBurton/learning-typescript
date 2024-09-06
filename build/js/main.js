"use strict";
// Literal Type
let myName;
let userName;
userName = 'Erika';
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello World!');
logMsg(add(100, 10));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(30, 7));
