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

type actorRoles = {
    name: String,
    active: boolean,
    roles: (string | number)[]
}

let actor1: actorRoles = {
    name: 'Keith David',
    active: true,
    roles: ["Dr Facilier", "Husk", "Andre Curtis"]
}




