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
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 30, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 10));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 10));
logMsg(sumAll(undefined, 50));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2));
