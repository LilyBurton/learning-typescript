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