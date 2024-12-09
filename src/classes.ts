class Coder {
    constructor(
        public readonly name: string,
        public musicArtist: string,
        private age: number,
        protected lang: string = 'TypeScript'
    )
        {
            this.name = name
            this.musicArtist = musicArtist
            this.age = age
            this.lang = lang
        }

        public getAge() {
            return `Hello, my age is ${this.age}!`
        }
}

const Lily = new Coder('Lily', 'Lady Gaga', 30)

console.log(Lily.getAge()) 

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        musicArtist: string,
        age: number
    ) {
        super(name, musicArtist, age)
        this.computer = computer
    }

    public getLang() {
        return `I write ${this.lang}!`
    }
}

const Emily = new WebDev('Windows', 'Emily', 'Disney', 2000)

console.log(Emily.getLang())
/////////////////////////////////////////////////////////////////

interface Musician {
    name: string,
    instrument: string, 
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor (name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}.`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))
/////////////////////////////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const Sera = new Peeps('Sera')
const Lute = new Peeps('Lute')
const Adam = new Peeps('Adam')

console.log(Adam.id)
console.log(Sera)
console.log(Lute.id)
/////////////////////////////////////////////////////////////////

class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
                this.dataState = value
                return
            } else {
                throw new Error('Param is not an array of strings!')
            }
    }
}

const myBands = new Bands()
myBands.data = ['Creepy Nuts', 'The 1975']
console.log(myBands.data)
myBands.data = [...myBands.data, 'Twice']
console.log(myBands.data)


