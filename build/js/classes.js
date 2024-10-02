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
