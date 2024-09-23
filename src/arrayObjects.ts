let stringArr = ['Erika', 'Blake', 'Amir']
let stringAndNumbers = ['one', 2, '3']
let mixedData = ['mixed', 4, true]

stringArr[0] = 'Joel'
stringArr.push('Krystina')

stringAndNumbers[0] = 1992
stringAndNumbers.unshift('Four')

let test = []
let books: string[] = []
books.push('To Gaze Upon Wicked Gods')

// tuple

let myTuple: [string, number, boolean] = ['Lily', 42, false]

let mixed = ['Jess', 12, true]

myTuple[1] = 13

// Objects

let myObj: Object;
myObj = []
console.log(typeof myObj)
myObj = books
myObj = {}

const exampleObj = {
    prop1: 'Blake',
    prop2: true
}

interface Actor {
    name?: String,
    active: boolean,
    filmography: (string | number)[]
}

const actor1: Actor = {
    name: 'Keith David', 
    active: true,
    filmography: ['The Princess and The Frog', 'Rick and Morty', 'Hazbin Hotel', 'Coraline']
}

const actor2: Actor = {
    name: 'Marilyn Monroe',
    active: false,
    filmography: ['Some Like it Hot', 'Gentlemen Prefers Blondes', 'How to Marry a Millionaire', 'The Seven Year Itch']
}

const greetActor = (actor: Actor) => {
    if (actor.name) {
        return `Hello ${actor.name?.toUpperCase()}!`
    } return 'Hello!'
    
}

console.log(greetActor(actor2))

// Enums

enum Grade {
    U,
    D,
    C,
    B,
    A,
    S
}

console.log(Grade.S)

