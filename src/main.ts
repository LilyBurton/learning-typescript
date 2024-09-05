let actorsNames = ['Erika', 'Blake', 'Amir']
console.log(actorsNames)

let ages = ['sixty', 20, 30]

let mixedData = ['string', 10, true]

actorsNames[0] = 'Joel'
actorsNames.push('Keith')

ages[0] = 42
ages.unshift('22')

let test = []
let books: string[] = []
books.push('The Poppy War')

let myTuple: [string, number, boolean] = ['Joel', 40, true]

let mixed = ['Blake', 24, true]

myTuple[1] = 42

let myObj: object
myObj = []
console.log(typeof myObj)

myObj = books

myObj = {}

const exampleObj = {
    prop1: 'Lily',
    prop2: true 
}

exampleObj.prop1 = 'Delia'

interface actorRoles {
    name?: String,
    active: boolean,
    roles: (string | number)[]
}

let actor1: actorRoles = {
    name: 'Keith David',
    active: true,
    roles: ["Dr Facilier", "Husk", "Andre Curtis"]
}

let actor2: actorRoles = {
    name: 'Hugh Jackman',
    active: true,
    roles: ['Wolverine', 'P. T. Barnum']
}

const greetActor = (actor: actorRoles) => {
    if (actor.name) {
        return `Hello ${actor.name.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetActor(actor1))

// Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U)




