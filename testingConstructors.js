class Animal {

    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats`);
    }
}

class Dog extends Animal {
    #age;
    constructor(name, age) {
        super(name);
        this.name = name;
        this.#age = age;
    }
    bark() {
        console.log(`${this.name} barks`);
    }
    eat() {
        console.log(`${this.name} chomps and is ${this.#age} years old`);
    }
}

const rex = new Dog('Rex', 2);
rex.eat();
rex.bark();