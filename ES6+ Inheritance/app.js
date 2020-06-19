class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal {

    speak() {
        console.log(this.name + " bark.");
    }
}

const dog = new Animal ("Karabaş");

dog.speak();