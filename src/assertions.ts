type One = string;
type Two = string | number
type Three = 'hello';

// convert to more or less specific

let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One> 'world'
let e = <String | number> 'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2, 'concat') as string

// TS sees no problem, but it will return as a string
let newVal: number = addOrConcat(2,2, 'concat') as number

// 10 as string
(10 as unknown) as string 

// The DOM

const img = document.querySelector('img') as HTMLImageElement
const myImg = document.querySelector('#img') as HTMLImageElement
const newImg = <HTMLImageElement>document.querySelector('#img')

img.src
myImg.src