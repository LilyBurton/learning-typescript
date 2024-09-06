// Type Aliases 
type stringOrNumber = String | Number

type stringOrNumberArray = (string | number)[]

interface actorRoles {
    name?: String,
    active: boolean,
    roles: (string | number)[]
}

type userId = stringOrNumber

// Literal Type
let myName: 'Lily'

let userName: 'Lily' | 'Jean' | 'Erika'
userName = 'Erika'

// Functions

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello World!')
logMsg(add(100, 10))

let subtract = function (c: number, d: number):
    number {
        return c - d
    }

    // type mathFunction = (a: number, b: number) => number
    interface mathFunction {
        (a: number, b: number): number
    }

    let multiply: mathFunction = function (c, d) {
        return c * d
    }

    logMsg(multiply(30, 7))
