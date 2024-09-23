"use strict";
let stringArr = ['Erika', 'Blake', 'Amir'];
let stringAndNumbers = ['one', 2, '3'];
let mixedData = ['mixed', 4, true];
stringArr[0] = 'Joel';
stringArr.push('Krystina');
stringAndNumbers[0] = 1992;
stringAndNumbers.unshift('Four');
let test = [];
let books = [];
books.push('To Gaze Upon Wicked Gods');
// tuple
let myTuple = ['Lily', 42, false];
let mixed = ['Jess', 12, true];
myTuple[1] = 13;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = books;
myObj = {};
const exampleObj = {
    prop1: 'Blake',
    prop2: true
};
const actor1 = {
    name: 'Keith David',
    active: true,
    filmography: ['The Princess and The Frog', 'Rick and Morty', 'Hazbin Hotel', 'Coraline']
};
const actor2 = {
    name: 'Marilyn Monroe',
    active: false,
    filmography: ['Some Like it Hot', 'Gentlemen Prefers Blondes', 'How to Marry a Millionaire', 'The Seven Year Itch']
};
const greetActor = (actor) => {
    var _a;
    if (actor.name) {
        return `Hello ${(_a = actor.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetActor(actor2));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
    Grade[Grade["S"] = 5] = "S";
})(Grade || (Grade = {}));
console.log(Grade.S);
