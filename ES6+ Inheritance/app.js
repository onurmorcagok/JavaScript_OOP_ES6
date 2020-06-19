class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " bark.");
    }
}

class Dog extends Animal {

    speak() {
        console.log(this.name + " bark.");
    }
}

const dog = new Dog ("Karabaş");

console.log(dog);