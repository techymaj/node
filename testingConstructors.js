class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    bark() {
        console.log(`${this.name} barks`);
    }
}

const rex = new Dog('Rex');
rex.eat();
rex.bark();