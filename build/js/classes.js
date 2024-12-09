"use strict";
class Coder {
    constructor(name, musicArtist, age, lang = 'TypeScript') {
        this.name = name;
        this.musicArtist = musicArtist;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.musicArtist = musicArtist;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, my age is ${this.age}!`;
    }
}
const Lily = new Coder('Lily', 'Lady Gaga', 30);
console.log(Lily.getAge());
class WebDev extends Coder {
    constructor(computer, name, musicArtist, age) {
        super(name, musicArtist, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}!`;
    }
}
const Emily = new WebDev('Windows', 'Emily', 'Disney', 2000);
console.log(Emily.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
/////////////////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Sera = new Peeps('Sera');
const Lute = new Peeps('Lute');
const Adam = new Peeps('Adam');
console.log(Adam.id);
console.log(Sera);
console.log(Lute.id);
/////////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings!');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Creepy Nuts', 'The 1975'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Twice'];
console.log(myBands.data);
