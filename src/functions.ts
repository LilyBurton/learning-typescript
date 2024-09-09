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

    // Optional Parameters

    const addAll = (a: number, b:number, c?:number):
    number => {
        if (typeof c !== 'undefined') {
            return a + b + c
        }
            return a + b
    }
    const sumAll = (a: number = 30, b:number, c:number = 2):
    number => {
            return a + b + c
    }

    logMsg(addAll(2, 3, 10))
    logMsg(addAll(2, 3))
    logMsg(sumAll(2, 3, 10))
    logMsg(sumAll(undefined, 50))

    // Rest Parameters

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type
const isNumber = (value: any): boolean =>
    {
        return typeof value === 'number' ? true : false
    }

// use of the never type
const numberOrString = (value: string | number):
string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError("This should never happen!")
}
































        
